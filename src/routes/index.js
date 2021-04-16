const express = require("express");
const user = require('../user/user.routes');
const antiques = require('../antique/antique.routes');
const routesConstants = require('../../constant/routes');
const router = express.Router();

router.get('/', (req,res) =>  res.json(routesConstants));
router.use('/users', user);
router.use('/antiques', antiques);

module.exports = router;