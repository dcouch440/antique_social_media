const AntiqueImageService = require('../../../src/antiqueImage/antiqueImage.service');


const cleanupAntiqueImages = async knex => {
  const antique_ids = await knex('image').distinct('antique_id');
  const destroyImages = antique_ids.map(ids => {
    return AntiqueImageService.destroyDependencyById(ids.antique_id);
  });
  return Promise.all(destroyImages);
};


module.exports = { cleanupAntiqueImages };