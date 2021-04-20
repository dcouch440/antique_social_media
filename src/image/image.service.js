const imageDAO = require('./image.dao');
const { cloudinary } = require('./cloudinary.config')

class ImageService
{
  async upload({fileStr, antique_id})
  {
    try
    {
      const { // returning
        secure_url :image_url, public_id, width,
        height, format, resource_type
      } = await cloudinary
        .uploader.upload( fileStr, {
            upload_preset: 'ml_default',
            folder: `_ANTIQUE_${antique_id}_`
        });

      return imageDAO.storeUrl({
        image_url, antique_id, public_id, width,
        height, format, resource_type
      })
    }

    catch (err) { console.error(err); }
  }

  async destroyDependencyById(antique_id)
  {
    try
    {
      const folder = `_ANTIQUE_${antique_id}_`;

      await cloudinary.api.delete_resources_by_prefix(folder)
      await cloudinary.api.delete_folder(folder);

      return await imageDAO.destroyAllRelations(antique_id)
    }

    catch (err) { console.error(err) }
  }

  async getFirstImage(antique_id)
  {
    return imageDAO.findByIdLimitOne(antique_id)
      .catch(err => console.error(err));
  }

  async getAllImages(antique_id)
  {
    return imageDAO.findById(antique_id)
      .catch(err => console.error(err));
  }
}

module.exports = new ImageService();