const avatarController = require('./avatar.controller');
const router = require('express').Router();
const authorize = require('../../middleware/authorize-request');

router.post('/', authorize, avatarController.upload);

module.exports = router;
