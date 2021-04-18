const express = require('express');
const antiqueController = require('./antique.controller');
const router = express.Router()
const authorizeRequest = require('../../middleware/authorize-request');


// antiques
router.get('/', antiqueController.index);
router.post('/', antiqueController.create);

// antiques/:id
router.get('/:id', antiqueController.show);
router.delete('/:id', authorizeRequest, antiqueController.destroy);


module.exports = router;