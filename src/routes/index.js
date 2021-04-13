const express = require("express");
const user = require('../user/user.routes');
const antiques = require('../antique/antique.routes');
const router = express.Router();

router.use('/users', user);
router.use('/antiques', antiques)

module.exports = router;