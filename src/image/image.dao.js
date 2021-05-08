const { cloudinary } = require('../config/cloudinary.config');
const Image = require('./image.model');

// NOTE THIS FILE WAS EDITED AWAY FROM USING DB('IMAGE') AND MOVED TO IMAG.QUERY()
// TEST CASE THIS FOR ERRORS IN THE FUTURE

class ImageDAO
{
  async storeUrl ({ ...params })
  {
    try
    { // attempt to change to image class when
      return Image.query()
        .insert(params)
        .returning('id')
        .then(id => console.log(id));
    }

    catch (err)
    {
      // rollback
      console.error(err);
      await cloudinary.uploader
        .destroy(params.public_id, result => {
          console.info(result);
        });
    }
  }

  // remove async and test
  async destroyAllRelations (antique_id)
  {
    return await Image.query()
      .where('antique_id', antique_id);
  }

  findById (antique_id)
  {
    return Image.query()
      .where('antique_id', antique_id);
  }

  findByIdLimitOne (antique_id)
  {
    return Image.query()
      .where('antique_id', antique_id)
      .first();
  }

}

module.exports = new ImageDAO();