const antiqueDAO = require('./antique.doa');
const { limitOffset } = require('./antique.constant');
const { antiqueParams, queryParams } = require('./antique.params');
const { objLength, parseObjectInts } = require('../../lib/utils');
const imageService = require('../image/image.service');
const userDAO = require('../user/user.doa');
const likeDAO = require('../like/like.dao');
const userSerializer = require('../user/user.serializer');

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
    try {
      const antiqueLikes = await likeDAO.findByAntiqueId(id);
      const user_ids = antiqueLikes.map(like => like.user_id);
      const users = await userDAO.getUsersByIds(user_ids);
      const usersWithAttachedAvatars = await userSerializer.serializeWithUserAvatar(users);
      const { count } = await likeDAO.countByAntiqueId(id);
      const parsedCount = parseInt(count);
      return { likes: usersWithAttachedAvatars, count: parsedCount };
    } catch (err) {
      console.error(err);
    }
  }
  async getAntiquesByUserId ({ user_id, query }) {
    try {
      if (query['NOLIMIT'] === 'true') {
        return antiqueDAO.findAntiquesByUserId(user_id);
      }
      const queries = objLength(query) === 2 ? query : limitOffset;
      const parsedQuery = parseObjectInts(queries);
      await queryParams.validate(parsedQuery, { abortEarly: false });
      return antiqueDAO.findByUserId({ user_id, ...parsedQuery });
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new AntiqueService();