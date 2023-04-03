const router = require('express').Router();

const ArtileController = require('../controllers/article.controller');
const {checkAdmin} = require('../middleware/auth.middleware');
const upload = require('../middleware/uploads.middleware');
const cache = require('../helpers/cache');
router.post(
  '/new',
  checkAdmin,
  upload.single('file'),
  ArtileController.createArticle
);
router.get('/', cache(300), ArtileController.getArticles);
router.get('/:id', cache(300), ArtileController.getArticle);
router.put(
  '/:id',
  upload.single('file'),
  checkAdmin,
  ArtileController.updateArticle
);
router.delete('/:id', checkAdmin, ArtileController.deleteArticle);

module.exports = router;
