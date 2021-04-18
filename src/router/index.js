const express = require("express");
const user = require('../user/user.routes');
const antiques = require('../antique/antique.routes');
const routesConstants = require('../../constant/routes');
const getCurrentUser = require('../../middleware/get-current-user');
const router = express.Router();

// ----------- first ---
router.use(getCurrentUser)

router.get('/', (req,res) =>  res.json(routesConstants));
router.use('/users', user);
router.use('/antiques', antiques);

module.exports = router;