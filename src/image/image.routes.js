const imageController = require('./image.controller');
const router = require('express').Router();

router.post('/upload', imageController.upload);
// router.post('/delete-folder', imageController.destroy);
module.exports = router;
