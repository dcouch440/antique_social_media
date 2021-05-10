const User = require('./user.model');
const attachAvatarIfNotPresent = require('../../lib/attach-avatar-if-not-present');
class UserDAO {
  all () {
    return User.query();
  }
  async find (id) {
    const { username, avatar, online } = await User.query()
      .findById(parseInt(id))
      .withGraphFetched('avatar')
      .catch(err => console.error(err));

    const userAvatar = attachAvatarIfNotPresent(avatar);
    return { antique_owner: { username, avatar: userAvatar, online } };
  }

  async changeOnlineState ({ id, online }) {
    return await User.query().where('id', id).update({ online });
  }

  async getUsersByUsername (usernames) {
    const users = await User.query().where(builder => builder.whereIn('username', usernames))
      .withGraphFetched('avatar')
      .catch(err => console.error(err));

    return users.map(user => {
      const avatar = attachAvatarIfNotPresent(user.avatar);
      return { username: user.username, avatar };
    });
  }
  async getUserByUsername (username) {

    const user = await User.query().where('username', username)
      .withGraphFetched('avatar')
      .first()
      .catch(err => console.error(err));

    const avatar = attachAvatarIfNotPresent(user.avatar);
    return { username: user.username, avatar };
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
