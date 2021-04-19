const db = require('../../db');

class CloudinaryDAO
{
  async storeUrl({...params})
  {
    await db('image').insert(params)
  }

  async findBy(id)
  {
    return db('image').where('antique_id', id);
  }
}

module.exports = new CloudinaryDAO();