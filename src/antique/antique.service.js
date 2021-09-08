const antiqueDAO = require('./antique.doa');
const { limitOffset } = require('./antique.constant');
const { antiqueParams, queryParams } = require('./antique.params');
const { objLength, parseObjectInts } = require('../../lib/utils');
const imageService = require('../image/image.service');
const userDAO = require('../user/user.doa');
const likeDAO = require('../like/like.dao');
const userSerializer = require('../user/user.serializer');
const ServiceError = require('../../lib/service-error');

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
      throw new ServiceError(err);
    }
  }
  async limitOffset ({ ...query }) {
    try {
      const queries = objLength(query) === 2 ? query : limitOffset;
      const parsedQuery = parseObjectInts(queries);
      await queryParams.validate(parsedQuery, { abortEarly: false });
      return antiqueDAO.limitedList(parsedQuery);
    } catch (err) {
      throw new ServiceError(err);
    }
  }
  async create ({ file64, ...params }) {
    try {
      const parsedParams = parseObjectInts(params);
      await antiqueParams.validate(parsedParams, { abortEarly: false });
      const antique = await antiqueDAO.create(parsedParams);
      try {
        await imageService.upload({ file64, antique_id: antique.id });
      } catch (err) {
        await this.destroy(antique.id);
        throw err;
      }
      return antique;
    } catch (err) {
      throw new ServiceError(err);
    }
  }
  async queryCategory ({ category }) {
    return antiqueDAO.showUniques({ category });
  }
  async findMany (id) {
    try {
      return antiqueDAO.findManyById(id);
    } catch (err) {
      throw new ServiceError(err);
    }
  }
  async getUserAntiques (user_id) {
    try {
      return antiqueDAO.findAntiquesByUserId(user_id);
    } catch (err) {
      throw new ServiceError(err);
    }
  }
  async antiquesWithLikes (id) {
    try {
      const antiqueLikes = await likeDAO.findByAntiqueId(id);
      const user_ids = antiqueLikes.map(like => like.user_id);
      const users = await userDAO.getUsersByIds(user_ids);
      const usersWithAttachedAvatars = await userSerializer
        .serializeAllWithUserAvatar(users);
      const { count } = await likeDAO.countByAntiqueId(id);
      const parsedCount = parseInt(count);
      return { likes: usersWithAttachedAvatars, count: parsedCount };
    } catch (err) {
      throw new ServiceError(err);
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
      throw new ServiceError(err);
    }
  }
}

module.exports = new AntiqueService();
