const { cloudinary } = require('../config/cloudinary.config');
const Avatar = require('./avatar.model');

class AvatarDAO {
  async storeUrl ({ ...params }) {
    try {
      return Avatar.query()
        .insert(params)
        .returning('id')
        .then(id => console.log(id));
    } catch (err) {
      // rollback
      console.error(err);
      await cloudinary.uploader
        .destroy(params.public_id, result => {
          console.info(result);
        });
    }
  }

  async destroyById (public_id) {
    return Avatar.query()
      .where('public_id', public_id)
      .del();
  }

  findById (user_id) {
    return Avatar.query()
      .where('user_id', user_id);
  }
}

module.exports = new AvatarDAO();