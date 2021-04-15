const express = require('express');
const userController = require('./user.controller');
const router = express.Router()
// const auth = require('../auth/auth.middleware');
// // users

// router.post('/signup', () => userController.signUp);
router.get('/:id', userController.show);
router.post('/signin', userController.signIn);
router.post('/signup', userController.signUp);
router.get('/', userController.all)
// router.delete('/', userController.destroy)

// nested
router.get('/:id/antiques', userController.antiquesAll)
module.exports = router;