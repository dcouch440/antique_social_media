const express = require('express');
const users = require('../user/user.routes');
const antiques = require('../antique/antique.routes');
const likes = require('../like/like.routes');
const routesConstants = require('../../constant/routes');
const api = express.Router();

api.use('/users', users);
api.use('/antiques', antiques);
api.use('/likes', likes);

api.use('/', (_, res) => res.json(routesConstants));

module.exports = api;
