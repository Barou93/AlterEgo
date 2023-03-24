const router = require('express').Router();

const infoController = require('../controllers/information.controller');
const {checkAdmin} = require('../middleware/auth.middleware');

router.post('/', infoController.createInfos);
router.get('/', checkAdmin, infoController.getInfos);
router.get('/:id', checkAdmin, infoController.readInfos);
router.delete('/:id', checkAdmin, infoController.deleteInfos);

module.exports = router;
