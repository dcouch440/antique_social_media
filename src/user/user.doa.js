const User = require('./user.model');

class UserDAO {
  all () {
    return User.query();
  }
  find (id) {
    return User.query()
      .findById(parseInt(id));
  }
  getUsersByIds (id) {
    return User.query()
      .select('username', 'id')
      .where(builder => builder.whereIn('id', id))
      .limit(15);
  }
  destroy (id) {
    return User.query()
      .deleteById(id);
  }
  findByEmail (email) {
    return User.query()
      .where('email', email).first();
  }
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
