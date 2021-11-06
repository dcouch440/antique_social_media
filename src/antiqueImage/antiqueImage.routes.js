const router = require('express').Router();
const authorize = require('../../middleware/authorize-request');
const AntiqueImageController = require('./antiqueImage.controller');

router.post('/', authorize, AntiqueImageController.upload);
// router.post('/delete-folder', AntiqueImageController.destroy);
module.exports = router;
