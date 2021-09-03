const avatarService = require('../avatar/avatar.service');
const getAvatarIfNotPresent = require('../../lib/attachAvatarIfNotPresent');

class UserSerializer {
  async serializeWithUserAvatar (user) {
    try {
      const avatar = await this._getAvatarAndVerify(user);
      return {
        username: user.username,
        avatar,
        online: user.online
      };
    } catch (err) {
      console.error(err);
    }
  }
  async serializeAllWithUserAvatar (users) {
    const usersWithAttachedAvatars = users.map(async user => {
      const avatar = await this._getAvatarAndVerify(user);
      return {
        username: user.username,
        avatar,
        online: user.online
      };
    });
    return Promise.all(usersWithAttachedAvatars);
  }
  async _getAvatarAndVerify (user) {
    try {
      const { id } = user;
      const avatar = await avatarService.getAvatarByUserId(id);
      return getAvatarIfNotPresent(avatar);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new UserSerializer();