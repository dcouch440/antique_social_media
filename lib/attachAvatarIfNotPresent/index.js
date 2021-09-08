const avatarImage = require('./default-avatar');

/**
 *
 * @param {object} avatar
 * @returns {object|void} original avatar or new avatar if not present
 *
 */

const attachAvatarIfNotPresent = avatar => {
  try {
    const { resources } = avatar;
    if (resources.length) {
      const [ava] = resources;
      return ava;
    } else {
      return avatarImage;
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = attachAvatarIfNotPresent;