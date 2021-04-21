const userDAO = require('./user.doa');
const jwt = require('../auth/auth.jwt');
const { hashPassword , compareHash } = require('../auth/auth.bcrypt');
const { newUserParams } = require('./user.params');

class UserService
{

  async signIn({res, password, email})
  {

    try
    {
      const user = await userDAO.findByEmail(email)
      if (!user)
      {
        throw new Error('Invalid username or Password');
      }

      await compareHash({
        inputPassword: password, userPassword: user.password_digest
      });

      const payload = {
        id: user.id,
        username: user.username,
        email: user.email
      }

      const token = await jwt.sign(payload)

      return {token, user: payload}
    }
    catch (err)
    {
      res.status(403).json(err);
    }

  }

  async signUp({res, username, password, email})
  {

    try
    {
      const user = await userDAO.findByEmail(email);
      if(user)
      {
        res.status(403);
        throw new Error('email Found');
      }

      const userParams = {username, password, email};
      await newUserParams.validate(userParams, {abortEarly: false});

      const hashedPasswordUser = await hashPassword({res, username, email, password});
      const createdUser = await userDAO.create(hashedPasswordUser);
      delete createdUser.password_digest;

      const payload = {id: createdUser.id, username, email};
      const token = await jwt.sign(payload);

      return {...payload, token}
    }
    catch(err)
    {
      res.status(403).json(err);
    }

  }

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