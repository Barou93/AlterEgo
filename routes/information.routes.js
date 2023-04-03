const router = require('express').Router();

const infoController = require('../controllers/information.controller');
const {checkAdmin} = require('../middleware/auth.middleware');
const cache = require("../helpers/cache");
router.post('/', infoController.createInfos);
router.get('/', cache(300), checkAdmin, infoController.getInfos);
router.get('/:id', cache(300), checkAdmin, infoController.readInfos);
router.delete('/:id', checkAdmin, infoController.deleteInfos);

module.exports = router;
