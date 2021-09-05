const express = require('express');
const users = require('../user/user.routes');
const images = require('../image/image.routes');
const antiques = require('../antique/antique.routes');
const likes = require('../like/like.routes');
const avatars = require('../avatar/avatar.routes');
const routesConstants = require('../../constant/routes');
// const log = require('../../middleware/log');
const api = express.Router();


// api.use(log);
api.use('/images', images);
api.use('/avatars', avatars);
api.use('/users', users);
api.use('/antiques', antiques);
api.use('/likes', likes);

api.use('/', (req, res) => res.json(routesConstants));

module.exports = api;