const User = require('./user.model');

class UserDAO {

  all()
  {
    return User.query();
  }

  find(id)
  {
    return User.query().findById(parseInt(id))
                       .withGraphFetched('avatar');
  }

  destroy(id)
  {
    return User.query().deleteById(id);
  }

  findByEmail(email)
  {
    return User.query().where('email', email).first();
  }

  // add password error?
  create(hashedPasswordAndParams)
  {
    return User.query().insert(hashedPasswordAndParams)
  }

  select({LIMIT, OFFSET})
  {
    return User.query().offset({OFFSET}).limit({LIMIT});
  }
}

module.exports = new UserDAO();
