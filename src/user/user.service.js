const userDAO = require('./user.doa');
const jwt = require('../auth/auth.jwt');
const { hashPassword , compareHash } = require('../auth/auth.bcrypt');
const { newUserParams, userIdParams } = require('./user.params');
const attachAvatarIfNotPresent = require('../../lib/attachAvatarIfNotPresent');
const userSerializer = require('./user.serializer');
const deSign = require('../../lib/de-sign');

class UserService {
  async signIn ({ reqToken }) {
    try {
      const { email, password } = deSign(reqToken);
      const user = await userDAO.findByEmail(email);

      if (!user) {
        throw new Error('Invalid username or Password');
      }

      const isValid = await compareHash({
        inputPassword: password, userPassword: user.password_digest
      });

      if (!isValid) {
        throw new Error('Bad Username or Password');
      }

      const payload = {
        id: user.id,
        username: user.username,
        email: user.email,
        admin: user.admin
      };

      const token = await jwt.sign(payload);

      return { token, payload };
    } catch (err) {
      throw new Error(err.message);
    }
  }
  async signUp ({ reqToken }) {
    try {
      const { username, password, email } = deSign(reqToken);

      const user = await userDAO.findByEmail(email);

      if (user) {
        throw new Error('Invalid username or Password');
      }

      const userParams = { username, password, email };
      await newUserParams.validate(userParams, { abortEarly: false });
      const hashedPasswordUser = await hashPassword({ username, email, password });

      const createdUser = await userDAO.create(hashedPasswordUser);
      delete createdUser.password_digest;

      const payload = { id: createdUser.id, username, email, admin: false };
      const token = await jwt.sign(payload);

      return { payload, token };
    } catch (err) {
      throw new Error(err.message);
    }
  }
  async getUsersByIds (id) {
    try {
      const users = await userDAO.getUsersByIds(id);
      return users.map(user => {
        const avatar = attachAvatarIfNotPresent(user.avatar);
        return { username: user.username, avatar };
      });
    } catch (err) {
      throw new Error(err.message);
    }
  }
  all () {
    return userDAO.all();
  }
  async showOvert (id) {
    try {
      await userIdParams.validate({ id });
      const user = await userDAO.find(id);
      const { username, avatar, online } = await userSerializer.serializeWithUserAvatar(user);
      return {
        antique_owner: {
          id,
          username,
          avatar,
          online
        }
      };
    } catch (err) {
      throw new Error(err.message);
    }
  }
  async destroy (id) {
    try {
      await userIdParams.validate({ id });
      return userDAO.destroy(id);
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

module.exports = new UserService();