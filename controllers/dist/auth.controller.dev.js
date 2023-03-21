"use strict";

var models = require('../models');

var Admin = models.Admin;

var jwt = require('jsonwebtoken');

var bcrypt = require('bcrypt');

var maxAge = 24 * 60 * 60 * 1000; // 24h

var createToken = function createToken(id) {
  return jwt.sign({
    id: id
  }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge
  });
}; //Création d'un compte admin


module.exports.register = function _callee2(req, res) {
  var emailRegex, passwordRegex, _req$body, username, email, password, errors, _errors, _errors2, emailIsFound, _errors3;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          //console.log(req.body);
          //Verify if eamil and password values matched with the regex values
          emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
          passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
          _req$body = req.body, username = _req$body.username, email = _req$body.email, password = _req$body.password;

          if (!(username === '' && email === '' && password === '')) {
            _context2.next = 6;
            break;
          }

          errors = {
            message: 'Merci de remplir les champs obligatoires'
          };
          return _context2.abrupt("return", res.send({
            errors: errors
          }));

        case 6:
          if (emailRegex.test(email)) {
            _context2.next = 9;
            break;
          }

          _errors = {
            email: 'Cet email est incorrect, reesayer SVP!'
          };
          return _context2.abrupt("return", res.send({
            errors: _errors
          }));

        case 9:
          if (passwordRegex.test(password)) {
            _context2.next = 12;
            break;
          }

          _errors2 = {
            password: 'Le mot de passe doit avoir 8 caractères et inclure 1 lettre majuscule, 1 chiffre et 1 caractère spécial'
          };
          return _context2.abrupt("return", res.send({
            errors: _errors2
          }));

        case 12:
          _context2.prev = 12;
          _context2.next = 15;
          return regeneratorRuntime.awrap(Admin.findOne({
            where: {
              email: email
            }
          }));

        case 15:
          emailIsFound = _context2.sent;

          if (!emailIsFound) {
            _context2.next = 19;
            break;
          }

          _errors3 = {
            email: 'Cet email est déjà pris! Saisissez un autre e-mail'
          };
          return _context2.abrupt("return", res.send({
            errors: _errors3
          }));

        case 19:
          bcrypt.hash(password, 10).then(function _callee(hash) {
            var admin;
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return regeneratorRuntime.awrap(Admin.create({
                      username: username,
                      email: email,
                      password: hash
                    }));

                  case 2:
                    admin = _context.sent;
                    return _context.abrupt("return", res.status(201).json({
                      admin: admin.toJSON()
                    }));

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            });
          });
          _context2.next = 26;
          break;

        case 22:
          _context2.prev = 22;
          _context2.t0 = _context2["catch"](12);
          res.status(500).json({
            error: _context2.t0
          });
          console.log(_context2.t0);

        case 26:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[12, 22]]);
}; //Authentification administrateur


module.exports.login = function _callee3(req, res) {
  var _req$body2, email, password, admin, errors, _errors4, auth, _errors5, token;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
          _context3.next = 4;
          return regeneratorRuntime.awrap(Admin.findOne({
            where: {
              email: email
            },
            raw: true
          }));

        case 4:
          admin = _context3.sent;

          if (!(email === '' && password === '')) {
            _context3.next = 9;
            break;
          }

          errors = {
            email: 'Veuillez saisir votre adresse e-mail.',
            password: 'Veuillez saisir votre mot de passe.'
          };
          res.send({
            errors: errors
          });
          return _context3.abrupt("return");

        case 9:
          if (admin) {
            _context3.next = 13;
            break;
          }

          _errors4 = {
            email: 'Email incorrect',
            password: ''
          };
          res.send({
            errors: _errors4
          });
          return _context3.abrupt("return");

        case 13:
          _context3.next = 15;
          return regeneratorRuntime.awrap(bcrypt.compare(password, admin.password));

        case 15:
          auth = _context3.sent;

          if (auth) {
            _context3.next = 20;
            break;
          }

          _errors5 = {
            email: '',
            password: 'Mot de passe erroné'
          };
          res.send({
            errors: _errors5
          });
          return _context3.abrupt("return");

        case 20:
          //console.log(admin.id);
          //All values is valiates
          token = createToken(admin.id);
          res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: maxAge
          });
          return _context3.abrupt("return", res.status(200).json({
            admin: admin.id,
            token: token
          }));

        case 25:
          _context3.prev = 25;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json(_context3.t0);
          console.log(_context3.t0);

        case 29:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 25]]);
};

module.exports.logout = function (req, res) {
  res.cookie('jwt', '', {
    maxAge: 1
  });
  res.redirect('/');
};