const attachImageIfNotPresent = require('../../lib/attachImageIfNotPresent');
const imageDAO = require('./image.dao');

class ImageService {
  async findByAntiqueId (antique_id) {
    try {
      const { resources } = await imageDAO.findByAntiqueId(antique_id);
      return resources;
    } catch ({ message }) {
      throw new Error(message);
    }
  }
  async upload ({ file64, antique_id }) {
    try {
      return imageDAO.storeUrl({ file64, antique_id });
    } catch ({ message }) {
      throw new Error(message);
    }
  }
  async destroyDependencyById (antique_id) {
    try {
      return imageDAO.destroyAllRelations(antique_id);
    } catch ({ message }) {
      throw new Error(message);
    }
  }
  async getFirstImage (antique_id) {
    try {
      const images = await imageDAO.findByIdLimitOne(antique_id);
      return attachImageIfNotPresent({ images, antique_id });
    } catch ({ message }) {
      throw new Error(message);
    }
  }
  async getAllImages (antique_id) {
    try {
      return imageDAO.findById(antique_id);
    } catch ({ message }) {
      throw new Error(message);
    }
  }
}

module.exports = new ImageService();
