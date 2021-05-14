const { cloudinary } = require('../config/cloudinary.config');
const avatarPublicIdFormat = require('../../constant/avatar-public-id');

class AvatarDAO {
  storeUrl ({ file64, avatarPublicId }) {
    return cloudinary
      .uploader.upload( file64 , {
        upload_preset: 'ml_default',
        public_id: avatarPublicId
      });
  }
  destroyById (public_id) {
    return cloudinary.api.delete_resources(public_id);
  }
  findById (user_id) {
    const avatarPublicId = avatarPublicIdFormat(user_id);
    console.log('lol');
    return cloudinary.search.expression(`
      public_id:${avatarPublicId}
    `).execute();
  }
}

module.exports = new AvatarDAO();