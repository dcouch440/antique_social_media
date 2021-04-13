const userDAO = require('./user.doa');

class UserService
{
  all()
  {
    return userDAO.all();
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