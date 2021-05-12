const LikeDAO = require('./like.dao');
const antiqueService = require('../antique/antique.service');

class LikeService {
  async liked (params) {
    try {
      const liked = await LikeDAO.isPresent(params);
      return liked ? true : false;
    } catch (err) {
      console.error(err);
    }
  }
  async like ({ req, antique_id }) {
    try {
      const { username, user_id } = req.currentUser;
      return LikeDAO.create({ username, antique_id, user_id });
    } catch (err) {
      console.error(err);
    }
  }
  async unlike ({ req, antique_id }) {
    try {
      const { username, user_id } = req.currentUser;
      return LikeDAO.destroy({ username, antique_id, user_id });
    } catch (err) {
      console.error(err);
    }
  }
  async getLikesCountByAntiqueId ({ antique_id }) {
    try {
      const { count } = await LikeDAO.countByAntiqueId({ antique_id });
      return parseInt(count);
    } catch (err) {
      console.error(err);
    }
  }
  async likes ({ req }) {
    try {
      const { user_id } = req.currentUser;
      const likes = (await LikeDAO.likes(user_id)).map(data => data.antique_id);
      return antiqueService.findManyById(likes);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new LikeService();