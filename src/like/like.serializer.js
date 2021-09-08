const ServiceError = require('../../lib/service-error');
const imageService = require('../image/image.service');

class LikesSerializer {
  async serializeLikesWithImages (likes) {
    try {
      const likesWithImages = likes.map(async like => {
        const { id } = like;
        const { resources } = await imageService.getFirstImage(id);
        return {
          ...like,
          images: resources
        };
      });
      return Promise.all(likesWithImages);
    } catch (err) {
      throw new ServiceError(err);
    }
  }
}

module.exports = new LikesSerializer();
