const express = require('express');
const userController = require('./user.controller');
const router = express.Router()

// users

router.get('/', userController.index);
router.get('/:id', userController.show);
router.post('/', userController.create);
router.delete('/:id', userController.destroy)

// nested
router.get('/:id/antiques', userController.antiquesAll)
module.exports = router;