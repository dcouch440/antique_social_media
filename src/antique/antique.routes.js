const express = require('express');
const antiqueController = require('./antique.controller');
const router = express.Router();

router.get('/', antiqueController.index);
router.post('/', antiqueController.create);
router.get('/users/:user_id', antiqueController.usersAntiques);
router.get('/:id/likes', antiqueController.likes);
router.get('/:id', antiqueController.show);
router.delete('/:id', antiqueController.destroy);

module.exports = router;