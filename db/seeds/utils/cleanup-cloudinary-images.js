const AntiqueImageService = require('../../../src/image/image.service');
const avatarService = require('../../../src/avatar/avatar.service');

const cleanupAntiqueImages = async knex => {
  const antique_ids = await knex('image').distinct('antique_id');
  const destroyImages = antique_ids.map(ids => {
    return AntiqueImageService.destroyDependencyById(ids.antique_id);
  });
  return Promise.all(destroyImages);
};

const cleanupAvatarImages = async knex => {
  const public_ids = await knex('avatar').distinct('public_id');
  const destroyAvatars = public_ids.map(ids_object => {
    return avatarService.deleteByPublicId(ids_object.public_id);
  });
  return Promise.all(destroyAvatars);
};

module.exports = { cleanupAntiqueImages, cleanupAvatarImages };