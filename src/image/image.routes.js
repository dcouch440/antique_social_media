const imageController = require('./image.controller');
const router = require('express').Router();
const authorize = require('../../middleware/authorize-request');

router.get('/:antique_id', imageController.show);
router.post('/', authorize, imageController.upload);
// router.post('/delete-folder', imageController.destroy);
module.exports = router;
