"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var models = require('../models');

var Admin = models.Admin,
    Article = models.Article;

var jwt = require('jsonwebtoken');

var fs = require('fs');

var sharp = require('sharp');
/**
 *
 * @param {Sring} req
 * @param {Srting} res
 * @param {String} Article model
 * @param {String} Admin model
 */


module.exports.createArticle = function _callee(req, res) {
  var token, decodedToken, adminId, admin, _req$body, title, content, image, articleImg, articleIsCreated, imageUrl, file, newArticle;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          token = req.cookies.jwt;
          decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
          adminId = decodedToken.id;
          _context.prev = 3;
          _context.next = 6;
          return regeneratorRuntime.awrap(Admin.findByPk(adminId));

        case 6:
          admin = _context.sent;
          _req$body = req.body, title = _req$body.title, content = _req$body.content, image = _req$body.image;
          articleImg = "uploads/resized_".concat(req.file.filename);
          _context.next = 11;
          return regeneratorRuntime.awrap(Article.findOne({
            where: {
              title: title
            }
          }));

        case 11:
          articleIsCreated = _context.sent;

          if (!articleIsCreated) {
            _context.next = 14;
            break;
          }

          return _context.abrupt("return", res.status(401).json("Un article du nom ".concat(title, " existe d\xE9j\xE0 sur le blog")));

        case 14:
          file = req.file; //Convert any input to very high quality JPEG

          _context.next = 17;
          return regeneratorRuntime.awrap(sharp(file.path).resize(600, 488, {
            fit: 'cover'
          }).jpeg({
            quality: 100,
            chromaSubsampling: '4:4:4'
          }).toFile(articleImg));

        case 17:
          fs.unlinkSync(file.path);

          if (file !== undefined) {
            imageUrl = articleImg;
          }

          if (!adminId) {
            _context.next = 28;
            break;
          }

          _context.next = 22;
          return regeneratorRuntime.awrap(Article.create({
            adminId: admin.id,
            title: title,
            content: content,
            image: "".concat(req.protocol, "://").concat(req.get('host'), "/") + imageUrl
          }));

        case 22:
          newArticle = _context.sent;

          if (!newArticle) {
            _context.next = 27;
            break;
          }

          return _context.abrupt("return", res.status(201).json(newArticle.toJSON()));

        case 27:
          return _context.abrupt("return", res.status(400).json('Impossible de créer cet article, Réessayer SVP !'));

        case 28:
          _context.next = 33;
          break;

        case 30:
          _context.prev = 30;
          _context.t0 = _context["catch"](3);
          return _context.abrupt("return", res.status(500).json(_context.t0));

        case 33:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 30]]);
};

module.exports.getArticles = function _callee2(req, res) {
  var articles;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(Article.findAll({
            order: [['createdAt', 'DESC']]
          }));

        case 2:
          articles = _context2.sent;

          if (!articles) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt("return", res.status(200).json(articles));

        case 7:
          return _context2.abrupt("return", res.send('Aucun articles disponible sur ce blog'));

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
};

module.exports.getArticle = function _callee3(req, res) {
  var id, article;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.next = 3;
          return regeneratorRuntime.awrap(Article.findByPk(id));

        case 3:
          article = _context3.sent;

          if (!article) {
            _context3.next = 8;
            break;
          }

          return _context3.abrupt("return", res.status(200).json(article));

        case 8:
          return _context3.abrupt("return", res.status(404).json("Cet article n'est plus disponible"));

        case 9:
        case "end":
          return _context3.stop();
      }
    }
  });
};

module.exports.updateArticle = function _callee4(req, res) {
  var token, adminId, articleId, imgUrl, file, isAdmin, _req$body2, title, content, image, updateImg, articleItem, updateArticle;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          token = jwt.verify(req.cookies.jwt, process.env.TOKEN_SECRET);
          adminId = token.id;
          articleId = req.params.id;
          _context4.prev = 3;
          file = req.file;
          _context4.next = 7;
          return regeneratorRuntime.awrap(Admin.findByPk(adminId));

        case 7:
          isAdmin = _context4.sent;
          _req$body2 = req.body, title = _req$body2.title, content = _req$body2.content, image = _req$body2.image;
          updateImg = "uploads/resized_".concat(req.file.filename);
          _context4.next = 12;
          return regeneratorRuntime.awrap(sharp(file.path).resize(600, 488, {
            fit: 'cover'
          }).jpeg({
            quality: 100,
            chromaSubsampling: '4:4:4'
          }).toFile(updateImg));

        case 12:
          fs.unlinkSync(file.path);

          if (file !== undefined) {
            imgUrl = updateImg;
          }

          articleItem = file ? {
            title: title,
            content: content,
            image: "".concat(req.protocol, "://").concat(req.get('host'), "/") + imgUrl
          } : {
            title: title,
            content: content
          };

          if (!(articleId && isAdmin.id)) {
            _context4.next = 26;
            break;
          }

          _context4.next = 18;
          return regeneratorRuntime.awrap(Article.update(_objectSpread({}, articleItem), {
            where: {
              id: articleId
            }
          }));

        case 18:
          updateArticle = _context4.sent;

          if (!updateArticle) {
            _context4.next = 23;
            break;
          }

          return _context4.abrupt("return", res.status(200).json("Mise \xE0 jour \xE9ffectuer avec succ\xE8s ".concat(updateArticle, " ")));

        case 23:
          return _context4.abrupt("return", res.status(400).json('Impossible de mettre à jour ce contenu'));

        case 24:
          _context4.next = 27;
          break;

        case 26:
          return _context4.abrupt("return", res.status(404).json("Cet article n'est plus disponible"));

        case 27:
          _context4.next = 32;
          break;

        case 29:
          _context4.prev = 29;
          _context4.t0 = _context4["catch"](3);
          return _context4.abrupt("return", res.status(500).json(_context4.t0.message));

        case 32:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[3, 29]]);
};

module.exports.deleteArticle = function _callee5(req, res) {
  var id, token, admin, article, filename;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          token = jwt.verify(req.cookies.jwt, process.env.TOKEN_SECRET);
          _context5.prev = 2;
          _context5.next = 5;
          return regeneratorRuntime.awrap(Admin.findByPk(token.id));

        case 5:
          admin = _context5.sent;
          _context5.next = 8;
          return regeneratorRuntime.awrap(Article.findOne({
            where: {
              id: id
            }
          }));

        case 8:
          article = _context5.sent;
          filename = article.image.split('./uploads')[1];

          if (admin) {
            _context5.next = 12;
            break;
          }

          return _context5.abrupt("return", res.status(401).json("Vous n'êtes pas autorisé à faire cette action"));

        case 12:
          fs.unlink("./uploads/".concat(filename), function () {
            var result = Article.destroy({
              where: {
                id: article.id
              }
            });

            if (!result) {
              return res.status(404).json("Cet article n'est plus disponible");
            }

            return res.status(200).json('Suppression effectuée avec succès');
          });
          _context5.next = 18;
          break;

        case 15:
          _context5.prev = 15;
          _context5.t0 = _context5["catch"](2);
          return _context5.abrupt("return", res.status(500).json(_context5.t0));

        case 18:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[2, 15]]);
};