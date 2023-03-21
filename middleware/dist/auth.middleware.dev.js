"use strict";

var jwt = require('jsonwebtoken');

var models = require('../models');

var Admin = models.Admin;

module.exports.checkAdmin = function (req, res, next) {
  var token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, function _callee(err, decodedToken) {
      var admin;
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!err) {
                _context.next = 6;
                break;
              }

              res.locals.admin = null;
              res.cookie('jwt', '', {
                maxAge: 1
              });
              next();
              _context.next = 11;
              break;

            case 6:
              _context.next = 8;
              return regeneratorRuntime.awrap(Admin.findByPk(decodedToken.id));

            case 8:
              admin = _context.sent;
              res.locals.admin = admin;
              next();

            case 11:
            case "end":
              return _context.stop();
          }
        }
      });
    });
  } else {
    res.locals.admin = null;
    next();
  }
};

module.exports.requireAuth = function (req, res, next) {
  var token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, function _callee2(err, decodedToken) {
      var admin;
      return regeneratorRuntime.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!err) {
                _context2.next = 4;
                break;
              }

              console.log(err); //res.sendStatus(200).json('No token');

              _context2.next = 10;
              break;

            case 4:
              _context2.next = 6;
              return regeneratorRuntime.awrap(Admin.findByPk(decodedToken.id));

            case 6:
              admin = _context2.sent;
              res.locals.admin = admin;
              console.log(admin.id);
              next();

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      });
    });
  } else {
    console.log('No Token');
  }
};