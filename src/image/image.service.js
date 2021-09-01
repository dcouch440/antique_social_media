const attachImageIfNotPresent = require('../../lib/attach-image-if-not-present');
const imageDAO = require('./image.dao');

class ImageService {
  async findByAntiqueId (antique_id) {
    try {
      const { resources } = await imageDAO.findByAntiqueId(antique_id);
      return resources;
    } catch (err) {
      console.error(err);
    }
  }
  async upload ({ file64, antique_id }) {
    try {
      return imageDAO.storeUrl({ file64, antique_id });
    } catch (err) {
      throw new Error(err);
    }
  }
  async destroyDependencyById (antique_id) {
    try {
      return imageDAO.destroyAllRelations(antique_id);
    } catch (err) {
      console.error(err);
    }
  }
  async getFirstImage (antique_id) {
    try {
      const images = await imageDAO.findByIdLimitOne(antique_id);
      return attachImageIfNotPresent({ images, antique_id });
    } catch (err) {
      console.error(err);
    }
  }
  async getAllImages (antique_id) {
    try {
      return imageDAO.findById(antique_id);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new ImageService();