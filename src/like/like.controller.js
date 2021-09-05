const getCurrentUser = require('../../lib/get-current-user');
const likeSerializer = require('./like.serializer');
const likeService = require('./like.service');

class LikeController {
  async liked (req,res) {
    try {
      const { antique_id } = req.params;
      const { user_id } = getCurrentUser(req);
      const isLiked = await likeService.liked({
        antique_id,
        user_id
      });
      res.status(200).json({ isLiked });
    } catch (err) {
      console.error(err);
      res.status(422).json({ message: err.message });
    }
  }
  async like (req,res) {
    try {
      const { antique_id } = req.params;
      const { username, user_id } = getCurrentUser(req);
      const liked = await likeService.like({
        username,
        user_id,
        antique_id
      });
      res.status(201).json(liked);
    } catch (err) {
      console.error(err);
      res.status(422).json({ message: err.message });
    }
  }
  async unlike (req,res) {
    try {
      const { antique_id } = req.params;
      const { username, user_id } = getCurrentUser(req);
      const liked = await likeService.unlike({
        username,
        user_id,
        antique_id
      });
      res.status(204).json(liked);
    } catch (err) {
      console.error(err);
      res.status(422).json({ message: err.message });
    }
  }
  async likes (req, res) {
    try {
      const { user_id } = getCurrentUser(req);
      const likes = await likeService.likes(user_id);
      const likesWithImages = await likeSerializer
        .serializeLikesWithImages(likes);
      res.status(200).json(likesWithImages);
    } catch (err) {
      console.error(err);
      res.status(422).json({ message: err.message });
    }
  }
}

module.exports = new LikeController();
