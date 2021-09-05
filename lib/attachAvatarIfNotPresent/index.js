const avatarImage = require('./default-avatar');

// attach avatar if the user comes back from the cloud without an image.

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