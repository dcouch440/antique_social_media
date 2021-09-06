const likeDAO = require('./like.dao');
const AntiqueDAO = require('../antique/antique.doa');

class LikeService {
  async liked (params) {
    try {
      const liked = await likeDAO.isPresent(params);
      return liked ? true : false;
    } catch ({ message }) {
      throw new Error(message);
    }
  }
  async like ({ antique_id, username, user_id }) {
    try {
      const parsedAntiqueId = parseInt(antique_id);
      return likeDAO
        .create({ username, antique_id: parsedAntiqueId, user_id });
    } catch ({ message }) {
      throw new Error({ message });
    }
  }
  async unlike ({ antique_id, username, user_id }) {
    try {
      const parsedAntiqueId = parseInt(antique_id);
      return likeDAO
        .destroy({ username, antique_id: parsedAntiqueId, user_id });
    } catch ({ message }) {
      throw new Error(message);
    }
  }
  async getLikesCountByAntiqueId (antique_id) {
    try {
      const { count } = await likeDAO.countByAntiqueId(antique_id);
      return parseInt(count);
    } catch ({ message }) {
      throw new Error(message);
    }
  }
  async likes (user_id) {
    try {
      const likes = (await likeDAO.likes(user_id))
        .map(data => data.antique_id);
      return AntiqueDAO.findManyById(likes);
    } catch ({ message }) {
      throw new Error(message);
    }
  }
  async getLikesByAntiqueId (antique_id) {
    try {
      return likeDAO.findByAntiqueId(antique_id);
    } catch ({ message }) {
      throw new Error(message);
    }
  }
}

module.exports = new LikeService();
