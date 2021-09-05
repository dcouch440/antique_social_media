const express = require('express');
const likeController = require('./like.controller');
const authorize = require('../../middleware/authorize-request');
const router = express.Router();

router.get('/', authorize, likeController.likes);
router.get('/:antique_id', authorize, likeController.liked);
router.post('/:antique_id', authorize, likeController.like);
router.delete('/:antique_id', authorize, likeController.unlike);

module.exports = router;