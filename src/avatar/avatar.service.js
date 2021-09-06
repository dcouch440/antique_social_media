const avatarDAO = require('./avatar.dao');
const avatarPublicIdFormat = require('../../constant/avatar-public-id');

class AvatarService {
  async deleteByPublicId (public_id) {
    try {
      return avatarDAO.destroyById(public_id);
    } catch ({ message }) {
      throw new Error(message);
    }
  }
  async upload ({ file64, user_id }) {
    try {
      const avatarPublicId = avatarPublicIdFormat(user_id);
      await avatarDAO.destroyById(avatarPublicId);
      return avatarDAO.uploadFile64({ file64, avatarPublicId });
    } catch ({ message }) {
      throw new Error(message);
    }
  }
  async getAvatarByUserId (id) {
    try {
      return avatarDAO.findById(id);
    } catch ({ message }) {
      throw new Error(message);
    }
  }
}

module.exports = new AvatarService();
