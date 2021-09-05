const avatarDAO = require('./avatar.dao');
const avatarPublicIdFormat = require('../../constant/avatar-public-id');

class AvatarService {
  async deleteByPublicId (public_id) {
    try {
      return avatarDAO.destroyById(public_id);
    } catch (err) {
      throw new Error(err.message);
    }
  }
  //  CALL AVATAR ON CREATION
  async upload ({ file64, user_id }) {
    try {
      const avatarPublicId = avatarPublicIdFormat(user_id);
      await avatarDAO.destroyById(avatarPublicId);
      return avatarDAO.storeUrl({ file64, avatarPublicId });
    } catch (err) {
      throw new Error(err.message);
    }
  }
  async getAvatarByUserId (id) {
    try {
      return avatarDAO.findById(id);
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

module.exports = new AvatarService();