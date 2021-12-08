const express = require('express');
const antiqueController = require('./antique.controller');
const authorize = require('../../middleware/authorize-request');
const router = express.Router();

router.get('/', antiqueController.index);
router.post('/', authorize, antiqueController.create);
router.post('/images', antiqueController.uploadAntiqueImage);
router.get('/users/:user_id', antiqueController.usersAntiques);
router.get('/:id/likes', antiqueController.likes);
router.get('/:id', antiqueController.show);
router.delete('/:id', authorize, antiqueController.destroy);

module.exports = router;
