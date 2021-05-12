const avatarDAO = require('./avatar.dao');
const { cloudinary } = require('../config/cloudinary.config');
const avatarPublicIdFormat = require('../../constant/avatar-public-id');

class AvatarService {
  async deleteByPublicId (public_id) {
    try {
      await cloudinary.api.delete_resources(public_id);
      return avatarDAO.destroyById(public_id);
    } catch (err) {
      console.error(err);
    }
  }
  //  CALL AVATAR ON CREATION
  async upload ({ file64, user_id }) {
    try {
      const avatarPublicId = avatarPublicIdFormat(user_id);
      const {
        secure_url :image_url,
        public_id,
        width,
        height,
        format,
        resource_type
      } = await cloudinary
        .uploader.upload( file64 , {
          upload_preset: 'ml_default',
          public_id: avatarPublicId
        });

      await avatarDAO.destroyById(avatarPublicId);

      return avatarDAO.storeUrl({
        image_url,
        public_id,
        width,
        height,
        format,
        resource_type,
        user_id
      });
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new AvatarService();