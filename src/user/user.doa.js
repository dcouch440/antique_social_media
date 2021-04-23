const User = require('./user.model');

class UserDAO {

  all()
  {
    return User.query();
  }

  async find(id)
  {
    const {username} = await User.query()
                                 .findById(parseInt(id));
    return ({username});
  }


  destroy(id)
  {
    return User.query().deleteById(id);
  }

  findByEmail(email)
  {
    return User.query().where('email', email).first();
  }

  create(hashedPasswordAndParams)
  {
    return User.query().insert(hashedPasswordAndParams);
  }

  select({LIMIT, OFFSET})
  {
    return User.query().offset({OFFSET}).limit({LIMIT});
  }
}

module.exports = new UserDAO();
