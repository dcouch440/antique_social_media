const imageController = require('./image.controller');
const router = require('express').Router();

router.get('/:antique_id', imageController.show);
router.post('/upload', imageController.upload);
// router.post('/delete-folder', imageController.destroy);
module.exports = router;
