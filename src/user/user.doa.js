const User = require('./user.model');

class UserDAO {
  all () {
    return User.query();
  }

  async find (id) {
    const { username, avatar, online } = await User.query()
      .findById(parseInt(id))
      .withGraphFetched('avatar')
      .catch(err => console.error(err));

    return { antique_owner: { username, avatar, online } };
  }

  async changeOnlineState ({ id, online }) {
    return await User.query().where('id', id).update({ online });
  }

  async getUsersByUsername (usernames) {
    const users = await User.query().where(builder => builder.whereIn('username', usernames))
      .withGraphFetched('avatar')
      .catch(err => console.error(err));

    return users.map(user => ({ username: user.username, avatar: user.avatar }));
  }

  async getUserByUsername (username) {

    const user = await User.query().where('username', username)
      .withGraphFetched('avatar')
      .first()
      .catch(err => console.error(err));

    return { username: user.username, avatar: user.avatar };
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
