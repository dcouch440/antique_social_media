const { cloudinary } = require('../config/cloudinary.config');
const Image = require('./antiqueImage.model');

class AntiqueImageDAO {
  saveUrl ({ secure_url, width, height, public_id, antique_id }) {
    return Image.query().insert({
      public_id,
      antique_id,
      secure_url,
      width,
      height,
    });
  }
  uploadToCloud ({ file64 }) {
    return cloudinary.uploader.upload( file64 , {
      upload_preset: 'ml_default',
    });
  }
  destroyByPublicIds (public_ids) {
    return cloudinary.api.delete_resources(public_ids);
  }
  getAllAntiquePublicIds (antique_id) {
    return Image.query()
      .select('public_id')
      .where('antique_id', '=', antique_id);
  }
}

module.exports = new AntiqueImageDAO();
