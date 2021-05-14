const avatarImage = require('./default-avatar');

const getAvatarIfNotPresent = avatar => {
  if (avatar) {
    const { resources } = avatar;
    const [ava] = resources;
    return ava;
  } else {
    return avatarImage;
  }
};

module.exports = getAvatarIfNotPresent;