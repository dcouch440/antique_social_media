const { cloudinary } = require('../config/cloudinary.config');
const antiqueFolderFormat = require('../../constant/image-file');
const Image = require('./antiqueImage.model');

class AntiqueImageDAO {
  saveUrl ({ secure_url, width, height, antique_id }) {
    return Image.query().insert({
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
  findByAntiqueId (antique_id) {
    return cloudinary.search
      .expression(
        `folder:${antiqueFolderFormat(antique_id)}`
      ).execute();
  }
  async destroyAllRelations (antique_id) {
    try {
      const folder = antiqueFolderFormat(antique_id);
      await cloudinary.api.delete_resources_by_prefix(folder);
      await cloudinary.api.delete_folder(folder);
      return 204;
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new AntiqueImageDAO();
