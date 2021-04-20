const express = require("express");
const users = require('../user/user.routes');
const images = require('../image/image.routes');
const antiques = require('../antique/antique.routes');
const routesConstants = require('../../constant/routes');
const getCurrentUser = require('../../middleware/get-current-user');
const log = require('../../middleware/log');
const router = express.Router();

// ----------- first ---
router.use(getCurrentUser)

router.use(log);

router.get('/', (req,res) =>  res.json(routesConstants));
router.use('/images', images);
router.use('/users', users);
router.use('/antiques', antiques);

module.exports = router;