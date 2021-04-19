const cloudinaryDAO = require('./cloudinary.dao');
const {cloudinary} = require('./cloudinary.config')

class CloudinaryService
{
  async upload({fileStr, antique_id})
  {
    const {secure_url :image_url} = await cloudinary.uploader.upload( fileStr, {
      upload_preset: 'ml_default',
    });
    return cloudinaryDAO.storeUrl({image_url, antique_id})
  }
}

module.exports = new CloudinaryService();