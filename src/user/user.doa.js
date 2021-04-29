const User = require('./user.model');

class UserDAO {

  all()
  {
    return User.query();
  }

  async find(id)
  {
    const {username, avatar } = await User.query()
      .findById(parseInt(id))
      .withGraphFetched('avatar')
      .catch(err => console.error(err));

    return {antique_owner: {username, avatar}};
  }

  destroy(id)
  {
    return User.query()
      .deleteById(id);
  }

  findByEmail(email)
  {
    return User.query()
      .where('email', email).first();
  }

  // add password error?
  create(hashedPasswordAndParams)
  {
    return User.query()
      .insert(hashedPasswordAndParams)
  }

  select({LIMIT, OFFSET})
  {
    return User.query()
      .offset({OFFSET})
      .limit({LIMIT});
  }
}

module.exports = new UserDAO();
