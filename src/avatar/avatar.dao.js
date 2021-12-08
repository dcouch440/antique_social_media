const { cloudinary } = require('../config/cloudinary.config');
const avatarPublicIdFormat = require('../../constant/avatar-public-id');

class AvatarDAO {
  uploadFile64 ({ file64 }) {
    return cloudinary
      .uploader.upload( file64 , {
        upload_preset: 'ml_default',
      });
  }
  destroyById (public_id) {
    return cloudinary.api.delete_resources(public_id);
  }
  findById (id) {
    const avatarPublicId = avatarPublicIdFormat(id);
    return cloudinary.search.expression(
      `public_id=${avatarPublicId}`
    ).execute();
  }
}

module.exports = new AvatarDAO();
