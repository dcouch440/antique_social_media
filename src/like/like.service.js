const LikeDAO = require('./like.dao');

class LikeService
{
  async liked(params)
  {
    const liked = await LikeDAO.isPresent(params)
    return liked ? true : false;
  }

  like(params)
  {
    return LikeDAO.create(params);
  }

  unlike(params)
  {
    return LikeDAO.destroy(params);
  }
}

module.exports = new LikeService();