const antiqueDAO = require('./antique.doa');
const { limitOffset } = require('./antique.constant');
const { antiqueParams, queryParams } = require('./antique.params');
const { objLength, parseObjectInts } = require('../../lib/utils');
const AntiqueImageService = require('../antiqueImage/antiqueImage.service');
const userDAO = require('../user/user.doa');
const likeDAO = require('../like/like.dao');
const userSerializer = require('../user/user.serializer');
const ServiceError = require('../../lib/service-error');

class AntiqueService {
  all () {
    return antiqueDAO.all();
  }
  async show (id) {
    return antiqueDAO.find(id);
  }
  async destroy (id) {
    try {
      await AntiqueImageService.destroyDependencyById(id);
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
      const antiques = await antiqueDAO.limitedList(parsedQuery);
      return this.grabFirstImage(antiques);
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
        await AntiqueImageService.upload({ file64, antique_id: antique.id });
      } catch (err) {
        await this.destroy(antique.id);
        throw err;
      }
      return antique;
    } catch (err) {
      throw new ServiceError(err);
    }
  }
  async findManyByIds (ids) {
    try {
      const antiques = await antiqueDAO.findManyByIds(ids);
      return this.grabFirstImage(antiques);
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
      const antiques = await antiqueDAO.findByUserId({ user_id, ...parsedQuery });
      return this.grabFirstImage(antiques);
    } catch (err) {
      throw new ServiceError(err);
    }
  }
  grabFirstImage (antiques) {
    return antiques.map(antique => ({
      ...antique,
      images: [antique.images[0]]
    }));
  }
}

module.exports = new AntiqueService();
