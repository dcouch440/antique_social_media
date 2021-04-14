const User = require('./user.model');

class UserDAO {

  find(id)
  {
    return User.query().findById(parseInt(id));
  }

  destroy(id)
  {
    return User.query().deleteById(id);
  }

  exists(email)
  {
    return User.query().where(email).first();
  }

  create(username)
  {
    return User.query().insert({
      username: username
    })
  }

  select({LIMIT, OFFSET})
  {
    return User.query().offset({OFFSET}).limit({LIMIT});
  }
}

module.exports = new UserDAO()
