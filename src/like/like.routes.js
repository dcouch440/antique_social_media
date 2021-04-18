const express = require('express');
const likeController = require('./like.controller');
const router = express.Router()
const authorizeRequest = require('../../middleware/authorize-request');


router.post('/:antique_id', likeController.like);
router.destroy('/:antique_id', likeController.unlike);


module.exports = router;