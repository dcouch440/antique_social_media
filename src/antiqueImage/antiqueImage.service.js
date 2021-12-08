const attachImageIfNotPresent = require('../../lib/attachImageIfNotPresent');
const ServiceError = require('../../lib/service-error');
const antiqueImageDAO = require('./antiqueImage.dao');

class AntiqueImageService {
  async findByAntiqueId (antique_id) {
    try {
      const { resources } = await antiqueImageDAO.findByAntiqueId(antique_id);
      return resources;
    } catch (err) {
      throw new ServiceError(err);
    }
  }
  async upload ({ file64 }) {
    try {
      return antiqueImageDAO.uploadToCloud({ file64 });
    } catch (err) {
      throw new ServiceError(err);
    }
  }
  async destroyByPublicIds (antique_id) {
    try {
      // get public ids from database to destroy all images in cloud
      const public_ids = antiqueImageDAO.getAllAntiquePublicIds(antique_id);
      return antiqueImageDAO.destroyByPublicIds(public_ids);
    } catch (err) {
      throw new ServiceError(err);
    }
  }
  async getFirstImage (antique_id) {
    try {
      const images = await antiqueImageDAO.findByIdLimitOne(antique_id);
      return attachImageIfNotPresent({ images, antique_id });
    } catch (err) {
      throw new ServiceError(err);
    }
  }
  async getAllImages (antique_id) {
    try {
      return antiqueImageDAO.findById(antique_id);
    } catch (err) {
      throw new ServiceError(err);
    }
  }
  async getAllAntiquePublicIds (antique_id) {
    try {
      return antiqueImageDAO.getAllAntiquePublicIds(antique_id);
    } catch (err) {
      throw new ServiceError(err);
    }
  }
}

module.exports = new AntiqueImageService();
