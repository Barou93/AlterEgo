const models = require("../models");
const {Admin, Article} = models;
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
  const token = jwt.verify(req.cookies.jwt, process.env.TOKEN_SECRET);
  const adminId = token.id;

  try {
    let imgUrl;
    const {file} = req;

    const isAdmin = await Admin.findByPk(adminId);
    const {title, content} = req.body;

    const isCreated = await Article.findOne({where: {title}});

    const articleImg =
      file !== undefined ? `uploads/resized_${file.filename}` : null;

    if (file !== undefined) {
      await sharp(file.path)
        .resize(600, 488, {fit: "cover"})
        .jpeg({
          quality: 100,
          chromaSubsampling: "4:4:4",
        })
        .toFile(articleImg);
      fs.unlinkSync(file.path);
    }

    imgUrl = articleImg;

    const articleItem = file
      ? {
          adminId: isAdmin.id,
          title,
          content,
          image: `${req.protocol}://${req.get("host")}/` + imgUrl,
        }
      : {
          adminId: isAdmin.id,
          title,
          content,
        };

    if (isCreated)
      return res.status(401).json(`l'article ${title} a déjà été créé.`);

    if (isAdmin.id) {
      const newArticle = await Article.create({
        ...articleItem,
      });
      if (newArticle) {
        return res
          .status(201)
          .json(
            `Votre article ${newArticle.title} a été ajouter avec succes:  `
          );
      } else {
        return res.status(400).json("Impossible de mettre à jour ce contenu");
      }
    } else {
      return res.status(404).json("Cet article n'est plus disponible");
    }
  } catch (error) {
    return res.status(500).json(error.message);
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
  const {id} = req.params;

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
    const {file} = req;
    const isAdmin = await Admin.findByPk(adminId);
    const {title, content, image} = req.body;

    if (articleId && isAdmin.id) {
      const updateArticle = await Article.update(
        {
          title,
          content,
        },
        {where: {id: articleId}}
      );
      if (updateArticle) {
        return res
          .status(200)
          .json(
            `La modification de l'article ${updateArticle.title} effectuée avec succès `
          );
      } else {
        return res.status(400).json("Impossible de mettre à jour ce contenu");
      }
    } else {
      return res.status(404).json("Cet article n'est plus disponible");
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
module.exports.deleteArticle = async (req, res) => {
  const {id} = req.params;
  const token = jwt.verify(req.cookies.jwt, process.env.TOKEN_SECRET);
  try {
    const admin = await Admin.findByPk(token.id);
    const article = await Article.findOne({where: {id}});

    if (article) {
      if (article.image) {
        const filename = article.image.split("./uploads")[1];
        if (!admin)
          return res
            .status(401)
            .json("Vous n'êtes pas autorisé à faire cette action");
        fs.unlink(`./uploads/${filename}`, () => {
          const result = Article.destroy({where: {id: article.id}});
          if (!result) {
            return res.status(404).json("Cet article n'est plus disponible");
          }
          return res.status(200).json("Contenu supprimer avec succès");
        });
      } else {
        await Article.destroy({where: {id: article.id}}).then((result) => {
          return res
            .status(200)
            .json("Votre article a été supprimer avec succès");
        });
      }
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
