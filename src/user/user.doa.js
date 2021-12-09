const { cloudinary } = require('../config/cloudinary.config');
const User = require('./user.model');

class UserDAO {
  find (id) {
    return User.query()
      .findById(parseInt(id));
  }
  uploadAvatar ({ file64 }) {
    return cloudinary
      .uploader.upload( file64 , {
        upload_preset: 'ml_default',
      });
  }
  destroyAvatarFromCloud (public_id) {
    return cloudinary.api.delete_resources(public_id);
  }
  saveAvatarInfo ({ user_id, secure_url, public_id }) {
    return User.query()
      .where('id', '=', user_id)
      .update({
        avatar: secure_url,
        avatar_public_id: public_id
      });
  }
  getUsersByIds (id) {
    return User.query()
      .select('username', 'id', 'avatar')
      .where(builder => builder.whereIn('id', id))
      .limit(15);
  }
  destroy (id) {
    return User.query()
      .deleteById(id);
  }
  findByEmail (email) {
    return User.query()
      .whereRaw('lower(email) = ?', email).first();
  }
  destroyById (public_id) {
    return cloudinary.api.delete_resources(public_id);
  }
  create (hashedPasswordAndParams) {
    return User.query()
      .insert(hashedPasswordAndParams);
  }
  select ({ LIMIT, OFFSET }) {
    return User.query()
      .offset({ OFFSET })
      .limit({ LIMIT });
  }
}

module.exports = new UserDAO();
