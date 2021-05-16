const express = require('express');
const userController = require('./user.controller');
const router = express.Router();


router.get('/', userController.all);
router.get('/in-room', userController.showByUsername);
router.get('/signout', userController.signOut);
router.get('/session', userController.session);
router.get('/:id', userController.show);
router.post('/signin', userController.signIn);
router.post('/signup', userController.signUp);
// REMOVE
router.get('/:id/antiques', userController.antiquesAll);

module.exports = router;