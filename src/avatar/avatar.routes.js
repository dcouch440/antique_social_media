const avatarController = require('./avatar.controller');
const router = require('express').Router();

router.post('/upload', avatarController.upload);
module.exports = router;
