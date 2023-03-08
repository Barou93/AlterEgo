const models = require("../models");
const { Admin, Article } = models;
const jwt = require("jsonwebtoken");
const fs = require("fs");
const sharp = require("sharp");
/**
 *
 * @param {Sring} req
 * @param {Srting} res
 * @param {String} Article model
 * @param {String} Admin model
 */

module.exports.createArticle = async (req, res) => {
   const token = req.cookies.jwt;
   const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
   const adminId = decodedToken.id;

   try {
      const admin = await Admin.findByPk(adminId);
      const { title, content, image } = req.body;

      const articleImg = `uploads/resized_${req.file.filename}`;

      const articleIsCreated = await Article.findOne({ where: { title } });
      let imageUrl;
      if (articleIsCreated)
         return res
            .status(401)
            .json(`Un article du nom ${title} existe déjà sur le blog`);

      const { file } = req;

      //Convert any input to very high quality JPEG
      await sharp(file.path)
         .resize(600, 488, { fit: "cover" })
         .jpeg({
            quality: 100,
            chromaSubsampling: "4:4:4",
         })
         .toFile(articleImg);
      fs.unlinkSync(file.path);

      if (file !== undefined) {
         imageUrl = articleImg;
      }
      if (adminId) {
         const newArticle = await Article.create({
            adminId: admin.id,
            title,
            content,
            image: `${req.protocol}://${req.get("host")}/` + imageUrl,
         });
         if (newArticle) {
            return res.status(201).json(newArticle.toJSON());
         } else {
            return res
               .status(400)
               .json("Impossible de créer cet article, Réessayer SVP !");
         }
      }
   } catch (error) {
      return res.status(500).json(error);
   }
};
module.exports.getArticles = async (req, res) => {
   const articles = await Article.findAll({
      order: [["createdAt", "DESC"]],
   });
   if (articles) {
      return res.status(200).json(articles);
   } else {
      return res.send("Aucun articles disponible sur ce blog");
   }
};
module.exports.getArticle = async (req, res) => {
   const { id } = req.params;

   const article = await Article.findByPk(id);
   if (article) {
      return res.status(200).json(article);
   } else {
      return res.status(404).json("Cet article n'est plus disponible");
   }
};
module.exports.updateArticle = async (req, res) => {
   const token = jwt.verify(req.cookies.jwt, process.env.TOKEN_SECRET);
   const adminId = token.id;
   const articleId = req.params.id;
   try {
      let imgUrl;
      const { file } = req;
      const isAdmin = await Admin.findByPk(adminId);
      const { title, content, image } = req.body;

      const updateImg = `uploads/resized_${req.file.filename}`;

      await sharp(file.path)
         .resize(600, 488, { fit: "cover" })
         .jpeg({
            quality: 100,
            chromaSubsampling: "4:4:4",
         })
         .toFile(updateImg);
      fs.unlinkSync(file.path);

      if (file !== undefined) {
         imgUrl = updateImg;
      }

      const articleItem = file
         ? {
              title,
              content,
              image: `${req.protocol}://${req.get("host")}/` + imgUrl,
           }
         : { title, content };

      if (articleId && isAdmin.id) {
         const updateArticle = await Article.update(
            {
               ...articleItem,
            },
            { where: { id: articleId } }
         );
         if (updateArticle) {
            return res
               .status(200)
               .json(`Mise à jour éffectuer avec succès ${updateArticle} `);
         } else {
            return res
               .status(400)
               .json("Impossible de mettre à jour ce contenu");
         }
      } else {
         return res.status(404).json("Cet article n'est plus disponible");
      }
   } catch (error) {
      return res.status(500).json(error.message);
   }
};
module.exports.deleteArticle = async (req, res) => {
   const { id } = req.params;
   const token = jwt.verify(req.cookies.jwt, process.env.TOKEN_SECRET);
   try {
      const admin = await Admin.findByPk(token.id);
      const article = await Article.findOne({ where: { id } });
      const filename = article.image.split("./uploads")[1];
      if (!admin)
         return res
            .status(401)
            .json("Vous n'êtes pas autorisé à faire cette action");
      fs.unlink(`./uploads/${filename}`, () => {
         const result = Article.destroy({ where: { id: article.id } });
         if (!result) {
            return res.status(404).json("Cet article n'est plus disponible");
         }
         return res.status(200).json("Suppression effectuée avec succès");
      });
   } catch (error) {
      return res.status(500).json(error);
   }
};
