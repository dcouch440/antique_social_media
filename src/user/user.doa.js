const User = require('./user.model');

class UserDAO {

  all()
  {
    return User.query();
  }

  find(id)
  {
    return User.query().findById(id);
  }

  destroy(id)
  {
    return User.query().deleteById(id);
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
