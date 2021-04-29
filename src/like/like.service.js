const LikeDAO = require('./like.dao');

class LikeService
{
  async liked(params)
  {
    const liked = await LikeDAO.isPresent(params)
    return liked ? true : false;
  }

  like({req, antique_id, user_id})
  {
    const {username} = req.currentUser
    return LikeDAO.create({username, antique_id, user_id});
  }

  unlike({req, antique_id, user_id})
  {
    const {username} = req.currentUser
    return LikeDAO.destroy({username, antique_id, user_id});
  }
}

module.exports = new LikeService();