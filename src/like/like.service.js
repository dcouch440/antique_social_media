const likeDAO = require('./like.dao');
const AntiqueDAO = require('../antique/antique.doa');

class LikeService {
  async liked (params) {
    try {
      const liked = await likeDAO.isPresent(params);
      return liked ? true : false;
    } catch (err) {
      console.error(err);
    }
  }
  async like ({ req, antique_id }) {
    try {
      const { username, user_id } = req.currentUser;
      return likeDAO.create({ username, antique_id, user_id });
    } catch (err) {
      console.error(err);
    }
  }
  async unlike ({ req, antique_id }) {
    try {
      const { username, user_id } = req.currentUser;
      return likeDAO.destroy({ username, antique_id, user_id });
    } catch (err) {
      console.error(err);
    }
  }
  async getLikesCountByAntiqueId (antique_id) {
    try {
      const { count } = await likeDAO.countByAntiqueId(antique_id);
      return parseInt(count);
    } catch (err) {
      console.error(err);
    }
  }
  async likes ({ req }) {
    try {
      const { user_id } = req.currentUser;
      const likes = (await likeDAO.likes(user_id)).map(data => data.antique_id);
      return AntiqueDAO.findManyById(likes);
    } catch (err) {
      console.error(err);
    }
  }
  async getLikesByAntiqueId (antique_id) {
    try {
      return likeDAO.findByAntiqueId(antique_id);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new LikeService();