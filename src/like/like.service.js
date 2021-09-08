const likeDAO = require('./like.dao');
const AntiqueDAO = require('../antique/antique.doa');
const ServiceError = require('../../lib/service-error');

class LikeService {
  async liked (params) {
    try {
      const liked = await likeDAO.isPresent(params);
      return liked ? true : false;
    } catch (err) {
      throw new ServiceError(err);
    }
  }
  async like ({ antique_id, username, user_id }) {
    try {
      const parsedAntiqueId = parseInt(antique_id);
      return likeDAO
        .create({ username, antique_id: parsedAntiqueId, user_id });
    } catch (err) {
      throw new ServiceError(err);
    }
  }
  async unlike ({ antique_id, username, user_id }) {
    try {
      const parsedAntiqueId = parseInt(antique_id);
      return likeDAO
        .destroy({ username, antique_id: parsedAntiqueId, user_id });
    } catch (err) {
      throw new ServiceError(err);
    }
  }
  async getLikesCountByAntiqueId (antique_id) {
    try {
      const { count } = await likeDAO.countByAntiqueId(antique_id);
      return parseInt(count);
    } catch (err) {
      throw new ServiceError(err);
    }
  }
  async likes (user_id) {
    try {
      const likes = (await likeDAO.likes(user_id))
        .map(data => data.antique_id);
      return AntiqueDAO.findManyById(likes);
    } catch (err) {
      throw new ServiceError(err);
    }
  }
  async getLikesByAntiqueId (antique_id) {
    try {
      return likeDAO.findByAntiqueId(antique_id);
    } catch (err) {
      throw new ServiceError(err);
    }
  }
}

module.exports = new LikeService();
