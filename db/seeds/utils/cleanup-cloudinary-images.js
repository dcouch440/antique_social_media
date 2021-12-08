const antiqueImageDao = require('../../../src/antiqueImage/antiqueImage.dao');


const cleanupAntiqueImages = async knex => {
  const public_ids = await knex('antique_image').distinct('public_id');
  const destroyImages = public_ids.map(public_id => {
    return antiqueImageDao.destroyByPublicIds(public_id);
  });
  return Promise.all(destroyImages);
};


module.exports = { cleanupAntiqueImages };