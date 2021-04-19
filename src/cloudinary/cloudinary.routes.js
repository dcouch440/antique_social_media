const cloudinaryController = require('./cloudinary.controller');
const router = require('express').Router();

router.post('/upload', cloudinaryController.upload);

module.exports = router;
