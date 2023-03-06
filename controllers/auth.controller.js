const models = require("../models");
const Admin = models.Admin;
const jwt = require("jsonwebtoken");

const maxAge = 24 * 60 * 60 * 1000; // 24h

const createToken = (id) => {
    jwt.sign({ id }, process.env.TOKEN {
       expiresIn: maxAge
   });
};
//Création d'un compte admin
module.exports.register = async () => {
   //Verify if eamil and password values matched with the regex values
   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
};

//Authentification administrateur
module.exports.login = async () => {};
