const likeService = require('./like.service');

class LikeController {
  async liked (req,res) {
    try {
      const { antique_id } = req.params;
      const isLiked = await likeService.liked({
        antique_id,
        user_id: req.currentUser.user_id
      });
      res.status(200).json({ isLiked });
    } catch (err) {
      console.error(err);
    }
  }
  async like (req,res) {
    try {
      const { antique_id } = req.params;
      const liked = await likeService.like({
        req,
        antique_id
      });
      res.status(201).json(liked);
    } catch (err) {
      console.error(err);
      res.status(422).json({ message: 'unprocessable entity' });
    }
  }
  async unlike (req,res) {
    try {
      const { antique_id } = req.params;
      const liked = await likeService.unlike({
        req,
        antique_id
      });
      res.status(204).json(liked);
    } catch (err) {
      res.status(422).json({ message: 'unprocessable entity' });
    }
  }
  async likes (req, res) {
    try {
      const likes = await likeService.likes({ req });
      res.status(200).json(likes);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new LikeController();
