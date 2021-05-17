const avatarController = require('./avatar.controller');
const router = require('express').Router();

router.post('/', avatarController.upload);
module.exports = router;
