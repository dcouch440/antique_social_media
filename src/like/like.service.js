const LikeDAO = require('./like.dao');
// const UserDAO = require('../user/user.doa');

class LikeService
{
  async liked(params)
  {
    const liked = await LikeDAO.isPresent(params)
    return liked ? true : false;
  }

  async like(params)
  {
    return LikeDAO.create(params);
  }

  unlike(params)
  {
    return LikeDAO.destroy(params);
  }
}

module.exports = new LikeService();