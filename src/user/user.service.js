const userDAO = require('./user.doa');
const jwt = require('../auth/auth.jwt');
// const { hashPassword , compareHash } = require('../auth/auth.bcrypt');

class UserService
{

  signIn({ username, password_digest, email })
  {
    return userDAO.exists(email)
  }

  show(id)
  {
    return userDAO.find(id);
  }

  destroy(id)
  {
    return userDAO.destroy(id);
  }

  create(username)
  {
    return userDAO.create(username);
  }

  antiquesAll(id)
  {
    return userDAO.find(id).withGraphFetched('antique');
  }

}

module.exports = new UserService();