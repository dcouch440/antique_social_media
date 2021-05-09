const avatarDAO = require('./avatar.dao');
const { cloudinary } = require('../config/cloudinary.config');
const avatarPublicIdFormat = require('../../constant/avatar-public-id');

class AvatarService {
  async deleteByPublicId (public_id) {

    await cloudinary.api.delete_resources(public_id)
      .catch(err => console.error(err));

    return avatarDAO.destroyById(public_id);
  }

  //  CALL AVATAR ON CREATION
  async upload ({ file64, user_id }) {
    const avatarPublicId = avatarPublicIdFormat(user_id);

    const {
      secure_url :image_url, public_id, width,
      height, format, resource_type
    } = await cloudinary
      .uploader.upload( file64 , {
        upload_preset: 'ml_default',
        public_id: avatarPublicId
      });

    await avatarDAO.destroyById(user_id);

    return avatarDAO.storeUrl({
      image_url, public_id, width,
      height, format, resource_type, user_id
    });
  }
}

module.exports = new AvatarService();