const avatarDAO = require('./avatar.dao');
const ServiceError = require('../../lib/service-error');

class AvatarService {
  async deleteByPublicId (public_id) {
    try {
      return avatarDAO.destroyById(public_id);
    } catch (err) {
      throw new ServiceError(err);
    }
  }
  async upload ({ file64 }) {
    try {
      await avatarDAO.destroyById();
      return avatarDAO.uploadFile64({ file64 });
    } catch (err) {
      throw new ServiceError(err);
    }
  }
  async getAvatarByUserId (id) {
    try {
      return avatarDAO.findById(id);
    } catch (err) {
      throw new ServiceError(err);
    }
  }
}

module.exports = new AvatarService();
