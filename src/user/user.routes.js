const express = require('express');
const userController = require('./user.controller');
const router = express.Router();
const authorize = require('../../middleware/authorize-request');

router.get('/signout', userController.signOut);
router.get('/session', userController.session);
router.get('/:id', userController.show);
router.post('/signin', userController.signIn);
router.post('/signup', userController.signUp);
router.post('/avatars', authorize, userController.uploadAvatar);
// REMOVE
router.get('/:id/antiques', userController.antiquesAll);

module.exports = router;
