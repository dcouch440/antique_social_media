const db = require('../../db');
const { cloudinary } = require('./cloudinary.config');

class ImageDAO
{
  async storeUrl({...params})
  {
    try
    {
      return db('image').insert(params).returning('id')
        .then(id => console.log(id))
    }

    catch (err)
    {
      // rollback
      console.error(err)
      await cloudinary.uploader.destroy(params.public_id, result => {
        console.info(result)
      });
    }
  }

  async destroyAllRelations(antique_id)
  {
    console.log('lol')
    return await db('image').where('antique_id', antique_id)
  }

  findById(antique_id)
  {
    return db('image').where('antique_id', antique_id)
  }

  findByIdLimitOne(antique_id)
  {
    return db('image').where('antique_id', antique_id).first();
  }

}

module.exports = new ImageDAO();