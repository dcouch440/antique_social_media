const Like = require('./like.model');

class LikeDAO
{
  isPresent({user_id, antique_id: id})
  {
    if (user_id && id) {
      return Like.query().where({user_id: user_id, antique_id: id}).first();
    }
  }

  destroy(params)
  {
    return Like.query().where(params).delete();
  }

  create(params)
  {
    return Like.query().insert(params)
  }
}

module.exports = new LikeDAO()
