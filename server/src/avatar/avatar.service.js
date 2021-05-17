const avatarDAO = require('./avatar.dao');
const avatarPublicIdFormat = require('../../constant/avatar-public-id');

class AvatarService {
  async deleteByPublicId (public_id) {
    try {
      return avatarDAO.destroyById(public_id);
    } catch (err) {
      console.error(err);
    }
  }
  //  CALL AVATAR ON CREATION
  async upload ({ file64, user_id }) {
    try {
      const avatarPublicId = avatarPublicIdFormat(user_id);
      await avatarDAO.destroyById(avatarPublicId);
      return avatarDAO.storeUrl({ file64, avatarPublicId });
    } catch (err) {
      console.error(err);
    }
  }
  async getAvatarByUserId (id) {
    try {
      return avatarDAO.findById(id);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new AvatarService();