const jwt = require("jsonwebtoken");
const models = require("../models");

const { Admin } = models;

module.exports.checkAdmin = (req, res, next) => {
   const token = req.cookies.jwt;
   if (token) {
      jwt.verify(token, process.env.TOKEN_SECRET, async (decoded, err) => {
         if (err) {
            res.locals.admin = null;
            res.cookie("jwt", "", { maxAge: 1 });
            next();
         } else {
            const admin = await Admin.findByPk(decoded.id);
            res.locals.admin = admin;
            next();
         }
      });
   } else {
      res.locals.admin = null;
      next();
   }
};

module.exports.requireAuth = (req, res, next) => {
   jwt.verify(token, process.env.TOKEN_SECRET, async (decodedToken, err) => {
      if (err) {
         console.log(err);
         res.send(200).json("Pas de Token");
         res.redirect("/login");
      } else {
         const admin = await Admin.findByPk(decodedToken.id);
         res.locals.admin = admin;
         next();
      }
   });
};
