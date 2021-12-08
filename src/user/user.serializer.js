const getAvatarIfNotPresent = require('../../lib/attachAvatarIfNotPresent');

class UserSerializer {
  async serializeWithUserAvatar (user) {
    try {
      const avatar = this._checkIfAvatarExists(user);
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
    const usersWithAttachedAvatars = users.map(user => {
      const { avatar } = this._checkIfAvatarExists(user);
      return {
        username: user.username,
        avatar,
        online: user.online
      };
    });
    return Promise.all(usersWithAttachedAvatars);
  }
  _checkIfAvatarExists (user) {
    return getAvatarIfNotPresent(user);
  }
}

module.exports = new UserSerializer();
