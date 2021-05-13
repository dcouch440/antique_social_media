const User = require('./user.model');

class UserDAO {
  all () {
    return User.query();
  }
  find (id) {
    return User.query()
      .findById(parseInt(id))
      .withGraphFetched('avatar');
  }
  changeOnlineState ({ id, online }) {
    return User.query()
      .where('id', id).update({ online });
  }
  getUsersByIds (id) {
    return User.query()
      .select('username')
      .where(builder => builder.whereIn('id', id))
      .withGraphFetched('avatar')
      .limit(15);
  }
  getUsersByUsername (usernames) {
    return User.query()
      .where(builder => builder.whereIn('username', usernames))
      .withGraphFetched('avatar');
  }
  getUserByUsername (username) {
    return User.query()
      .where('username', username)
      .withGraphFetched('avatar')
      .first();
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
