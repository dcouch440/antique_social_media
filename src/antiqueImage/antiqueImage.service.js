const attachImageIfNotPresent = require('../../lib/attachImageIfNotPresent');
const ServiceError = require('../../lib/service-error');
const AntiqueImageDAO = require('./antiqueImage.dao');

class AntiqueImageService {
  async findByAntiqueId (antique_id) {
    try {
      const { resources } = await AntiqueImageDAO.findByAntiqueId(antique_id);
      return resources;
    } catch (err) {
      throw new ServiceError(err);
    }
  }
  async upload ({ file64, antique_id }) {
    let image;
    try {
      image = await AntiqueImageDAO.uploadToCloud({ file64, antique_id });
    } catch (err) {
      throw new ServiceError(err);
    }
    try {
      await AntiqueImageDAO.saveUrl({ antique_id, ...image });
    } catch (err) {
      await this.destroyDependencyById(antique_id);
      throw new ServiceError(err);
    }
  }
  async destroyDependencyById (antique_id) {
    try {
      return AntiqueImageDAO.destroyAllRelations(antique_id);
    } catch (err) {
      throw new ServiceError(err);
    }
  }
  async getFirstImage (antique_id) {
    try {
      const images = await AntiqueImageDAO.findByIdLimitOne(antique_id);
      return attachImageIfNotPresent({ images, antique_id });
    } catch (err) {
      throw new ServiceError(err);
    }
  }
  async getAllImages (antique_id) {
    try {
      return AntiqueImageDAO.findById(antique_id);
    } catch (err) {
      throw new ServiceError(err);
    }
  }
}

module.exports = new AntiqueImageService();
