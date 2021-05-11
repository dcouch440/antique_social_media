const Like = require('./like.model');

class LikeDAO {
  isPresent ({ user_id, antique_id }) {
    if (user_id && antique_id) {
      return Like.query()
        .where({ user_id, antique_id })
        .first();
    }
  }
  destroy ({ username, antique_id, user_id }) {
    return Like.query()
      .where({ username, antique_id, user_id })
      .delete();
  }
  create (params) {
    return Like.query()
      .insert(params);
  }
  likes (user_id) {
    return Like.query().where('user_id', user_id);
  }

}

module.exports = new LikeDAO();
