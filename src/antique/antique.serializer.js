const imageService = require('../image/image.service');
const userService = require('../user/user.service');

/**
 * move to cloud with key value.
 */

class AntiqueSerializer {
  async serializeWithRelations ({ antique }) {
    try {
      const { id, user_id } = antique;
      const { resources } = await imageService.getFirstImage(id);
      return Object.assign(
        {},
        antique,
        { images: resources },
        await this._getOwnerRelations({ user_id })
      );
    } catch (err) {
      console.error(err);
    }
  }
  async serializeAllWithRelations ({ antiques }) {
    try {
      const attachmentTasks = antiques.map(async antique => {
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
  async _getOwnerRelations ({ user_id }) {
    try {
      return await userService.showOvert(user_id);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new AntiqueSerializer();
