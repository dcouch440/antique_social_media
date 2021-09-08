const avatarDAO = require('./avatar.dao');
const avatarPublicIdFormat = require('../../constant/avatar-public-id');
const ServiceError = require('../../lib/service-error');

class AvatarService {
  async deleteByPublicId (public_id) {
    try {
      return avatarDAO.destroyById(public_id);
    } catch (err) {
      throw new ServiceError(err);
    }
  }
  async upload ({ file64, user_id }) {
    try {
      const avatarPublicId = avatarPublicIdFormat(user_id);
      await avatarDAO.destroyById(avatarPublicId);
      return avatarDAO.uploadFile64({ file64, avatarPublicId });
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
