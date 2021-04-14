const express = require('express');
const antiqueController = require('./antique.controller');
const router = express.Router()

// users
router.get('/', antiqueController.index);
router.post('/', antiqueController.create);
// router.get('/:id', antiqueController.show);
// router.post('/', antiqueController.create);
// router.delete('/:id', antiqueController.destroy)

module.exports = router;