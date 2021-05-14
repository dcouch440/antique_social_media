const { cloudinary } = require('../config/cloudinary.config');
const antiqueFolderFormat = require('../../constant/image-file');

class ImageDAO {
  storeUrl ({ file64, antique_id }) {
    return cloudinary.uploader.upload( file64 , {
      upload_preset: 'ml_default',
      folder: antiqueFolderFormat(antique_id)
    });
  }
  findByAntiqueId (antique_id) {
    return cloudinary.search.expression(
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
  // REMOVED ? Commented for now
  // findById (antique_id) {
  //   return Image.query()
  //     .where('antique_id', antique_id);
  // }
  findByIdLimitOne (antique_id) {
    return cloudinary.search
      .expression(`folder:${antiqueFolderFormat(antique_id)}`)
      .max_results(1)
      .execute();
  }
}

module.exports = new ImageDAO();