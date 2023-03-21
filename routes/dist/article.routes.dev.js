"use strict";

var router = require('express').Router();

var ArtileController = require('../controllers/article.controller');

var _require = require('../middleware/auth.middleware'),
    checkAdmin = _require.checkAdmin;

var upload = require('../middleware/uploads.middleware');

router.post('/new', checkAdmin, upload.single('file'), ArtileController.createArticle);
router.get('/', ArtileController.getArticles);
router.get('/:id', ArtileController.getArticle);
router.put('/:id', upload.single('file'), checkAdmin, ArtileController.updateArticle);
router["delete"]('/:id', checkAdmin, ArtileController.deleteArticle);
module.exports = router;