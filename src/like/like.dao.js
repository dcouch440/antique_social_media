const antiqueService = require('../antique/antique.service');
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
  async likes (user_id) {
    try {
      const likes = (await Like.query().where('user_id', user_id))
        .map(like => like.antique_id);
      return antiqueService.findManyById(likes);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new LikeDAO();
