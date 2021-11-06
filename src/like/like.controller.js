const likeService = require('./like.service');

class LikeController {
  async liked (req, res, next) {
    try {
      const { antique_id } = req.params;
      const { user_id } = req.headers;
      const isLiked = await likeService
        .liked({ antique_id, user_id });
      res.status(200).json({ isLiked });
    } catch (err) {
      next(err);
    }
  }
  async like (req, res, next) {
    try {
      const { antique_id } = req.params;
      const { user_id } = req.headers;
      const liked = await likeService
        .like({ user_id, antique_id });
      res.status(201).json(liked);
    } catch (err) {
      next(err);
    }
  }
  async unlike (req, res, next) {
    try {
      const { antique_id } = req.params;
      const { user_id } = req.headers;
      const liked = await likeService
        .unlike({ user_id, antique_id });
      res.status(204).json(liked);
    } catch (err) {
      next(err);
    }
  }
  async likes (req, res, next) {
    try {
      const { user_id } = req.headers;
      const antiques = await likeService.likes(user_id);
      res.status(200).json(antiques);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new LikeController();
