const imageService = require('../image/image.service');

class LikesSerializer {
  async serializeLikesWithImages (likes) {
    const likesWithImages = likes.map(async like => {
      const { id } = like;
      const { resources } = await imageService.getFirstImage(id);
      return {
        ...like,
        images: resources
      };
    });
    return Promise.all(likesWithImages);
  }
}

module.exports = new LikesSerializer();