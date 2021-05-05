const express = require('express');
const likeController = require('./like.controller');
const router = express.Router();
// const authorizeRequest = require('../../middleware/authorize-request');


router.get('/', likeController.likes);
router.get('/:antique_id', likeController.liked);
router.post('/:antique_id', likeController.like);
router.delete('/:antique_id', likeController.unlike);


module.exports = router;