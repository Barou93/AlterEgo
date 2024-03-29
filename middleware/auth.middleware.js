const jwt = require("jsonwebtoken");
const models = require("../models");

const {Admin} = models;

module.exports.checkAdmin = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        res.locals.admin = null;
        res.cookie("jwt", "", {maxAge: 1});
        next();
      } else {
        const admin = await Admin.findByPk(decodedToken.id);
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
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err);

        //res.sendStatus(200).json('No token');
      } else {
        const admin = await Admin.findByPk(decodedToken.id);
        res.locals.admin = admin;
        //console.log(admin.id);
        next();
      }
    });
  } else {
    console.log("No Token");
  }
};
