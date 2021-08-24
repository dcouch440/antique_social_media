const imageService = require('../image/image.service');
const userService = require('../user/user.service');

class AntiqueSerializer {
  async serializeWithRelations ({ antique }) {
    try {
      const { user_id :owner_id } = antique;
      return Array.isArray(antique)
        ? await this.attachImageToAntiqueAndMerge({ antique })
        : await this.mergeObject({ antique, owner_id });
    } catch (err) {
      console.error(err);
    }
  }
  async attachImageToAntiqueAndMerge ({ antique }) {
    try {
      const attachmentTasks = antique.map(async antique => {
        const { id } = antique;
        const { resources } = await imageService.getFirstImage(id);
        return Object.assign(
          {},
          antique,
          { images: resources }
        );
      });
      return Promise.all(attachmentTasks);
    } catch (err) {
      console.error(err);
    }
  }
  async mergeObject ({ antique, owner_id }) {
    try {
      const { id } = antique;
      const { resources } = await imageService.getFirstImage(id);
      return Object.assign(
        {},
        antique,
        { images: resources },
        await this.getOwnerRelations({ owner_id })
      );
    } catch (err) {
      console.error(err);
    }
  }
  async getOwnerRelations ({ owner_id }) {
    try {
      return await userService.showOvert(owner_id);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new AntiqueSerializer();