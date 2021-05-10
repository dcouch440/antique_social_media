const avatarImage = require('./default-avatar');

const attachAvatarIfNotPresent = avatar => {
  if (avatar) {
    return avatar;
  } else {
    return avatarImage;
  }
};

module.exports = attachAvatarIfNotPresent;