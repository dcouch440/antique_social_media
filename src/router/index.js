const express = require('express');
const users = require('../user/user.routes');
const images = require('../image/image.routes');
const antiques = require('../antique/antique.routes');
const likes = require('../like/like.routes');
const avatars = require('../avatar/avatar.routes');
// const routesConstants = require('../../constant/routes');
const getCurrentUser = require('../../middleware/get-current-user');
const log = require('../../middleware/log');
const router = express.Router();

// ----------- first ---
router.use(getCurrentUser);

router.use(log);
router.use('/images', images);
router.use('/avatars', avatars);
router.use('/users', users);
router.use('/antiques', antiques);
router.use('/likes', likes);

module.exports = router;