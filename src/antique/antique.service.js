const antiqueDAO = require('./antique.doa');
const { limitOffset } = require('./antique.constant');
const { antiqueParams, queryParams } = require('./antique.params');
const { objLength, parseObjectInts } = require('../../lib/utils');
const imageService = require('../image/image.service');
const likeService = require('../like/like.service');
const userDAO = require('../user/user.doa');
const attachAvatarIfNotPresent = require('../../lib/attach-avatar-if-not-present');

class AntiqueService {
  all () {
    return antiqueDAO.all();
  }
  show (id) {
    return antiqueDAO.find(id);
  }
  async destroy (id) {
    try {
      await imageService.destroyDependencyById(id);
      return await antiqueDAO.destroy(id);
    } catch (err) {
      console.error(err);
    }
  }
  async limitOffset ({ ...query }) {
    try {
      const queries = objLength(query) === 2 ? query : limitOffset;
      const parsedQuery = parseObjectInts(queries);
      await queryParams.validate(parsedQuery, { abortEarly: false });
      return antiqueDAO.limitedList(parsedQuery);
    } catch (err) {
      return new Error(err);
    }
  }
  async create ({ ...params }) {
    try {
      const parsedParams = parseObjectInts(params);
      await antiqueParams.validate(parsedParams, { abortEarly: false });
      return antiqueDAO.create(parsedParams);
    } catch (err) {
      console.error(err);
    }
  }
  queryCategory ({ category }) {
    return antiqueDAO.showUniques({ category });
  }
  async findMany (id) {
    try {
      return antiqueDAO.findManyById(id);
    } catch (err) {
      console.error(err);
    }
  }
  async getUserAntiques (user_id) {
    try {
      return antiqueDAO.findAntiquesByUserId(user_id);
    } catch (err) {
      console.error(err);
    }
  }
  async antiquesWithLikes (id) {
    // currently users.service is coming back undefined,
    // might be an importing bug,
    // for now logic will be within this block
    const antiqueLikes = await likeService.getLikesByAntiqueId(id);
    const user_ids = antiqueLikes.map(like => like.user_id);
    const users = await userDAO.getUsersByIds(user_ids);

    const usersWithAvatars = users.map(user => {
      return {
        username: user.username,
        avatar: attachAvatarIfNotPresent(user.avatar)
      };
    });
    const count = await likeService.getLikesCountByAntiqueId(id);
    const likes = usersWithAvatars;
    return { likes, count };
  }
  async getAntiquesByUserId (user_id) {
    return await antiqueDAO.findByUserId(user_id);
  }
}

module.exports = new AntiqueService();