const User = require('./user.model');
const attachAvatarIfNotPresent = require('../../lib/attach-avatar-if-not-present');
class UserDAO {
  all () {
    return User.query();
  }
  async find (id) {
    try {
      const { username, avatar, online } = await User.query()
        .findById(parseInt(id))
        .withGraphFetched('avatar');

      const userAvatar = attachAvatarIfNotPresent(avatar);
      return { antique_owner: { username, avatar: userAvatar, online } };
    } catch (err) {
      console.error(err);
    }
  }
  async changeOnlineState ({ id, online }) {
    return await User.query()
      .where('id', id).update({ online })
      .catch(err => console.error(err));
  }
  async getUsersByUsername (usernames) {
    try {
      const users = await User.query()
        .where(builder => builder.whereIn('username', usernames))
        .withGraphFetched('avatar');

      return users.map(user => {
        const avatar = attachAvatarIfNotPresent(user.avatar);
        return { username: user.username, avatar };
      });
    } catch (err) {
      console.error(err);
    }
  }
  async getUserByUsername (username) {
    try {
      const user = await User.query().where('username', username)
        .withGraphFetched('avatar')
        .first();
      const avatar = attachAvatarIfNotPresent(user.avatar);
      return { username: user.username, avatar };
    } catch (err) {
      console.error(err);
    }
  }
  destroy (id) {
    return User.query()
      .deleteById(id);
  }
  findByEmail (email) {
    return User.query()
      .where('email', email).first();
  }
  // add password error?
  create (hashedPasswordAndParams) {
    return User.query()
      .insert(hashedPasswordAndParams);
  }
  select ({ LIMIT, OFFSET }) {
    return User.query()
      .offset({ OFFSET })
      .limit({ LIMIT });
  }
}

module.exports = new UserDAO();
