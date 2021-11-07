const userDAO = require('./user.doa');
const jwt = require('../auth/auth.jwt');
const { hashPassword , compareHash } = require('../auth/auth.bcrypt');
const { newUserParams, userIdParams } = require('./user.params');
const attachAvatarIfNotPresent = require('../../lib/attachAvatarIfNotPresent');
const userSerializer = require('./user.serializer');
const { UNAUTHORIZED } = require('../../constant/exceptions');
const ServiceError = require('../../lib/service-error');

class UserService {
  async signIn ({ email, password }) {
    try {
      const user = await userDAO.findByEmail(email);

      if (!user) {
        throw { name: UNAUTHORIZED };
      }

      const isValid = await compareHash({
        inputPassword: password, userPassword: user.password_digest
      });

      if (!isValid) {
        throw { name: UNAUTHORIZED };
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
      throw new ServiceError(err);
    }
  }
  async signUp ({ username, password, email }) {
    try {

      const user = await userDAO.findByEmail(email);

      if (user) {
        throw { name: UNAUTHORIZED };
      }

      const userParams = { username, password, email };
      await newUserParams.validate(userParams, { abortEarly: false });
      const hashedPasswordUser = await hashPassword({ username, email, password });

      const createdUser = await userDAO.create(hashedPasswordUser);
      delete createdUser.password_digest;

      const payload = {
        id: createdUser.id,
        username, email,
        admin: false
      };

      const token = await jwt.sign(payload);

      return { payload, token };
    } catch (err) {
      throw new ServiceError(err);
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
      throw new ServiceError(err);
    }
  }
  all () {
    return userDAO.all();
  }
  async showOvert (id) {
    try {
      const parsedID = parseInt(id);
      await userIdParams.validate({ id: parsedID });
      const user = await userDAO.find(parsedID);
      const { username, avatar, online } = await userSerializer
        .serializeWithUserAvatar(user);
      return {
        antique_owner: {
          id,
          username,
          avatar,
          online
        }
      };
    } catch (err) {
      throw new ServiceError(err);
    }
  }
  async destroy (id) {
    try {
      await userIdParams.validate({ id });
      return userDAO.destroy(id);
    } catch (err) {
      throw new ServiceError(err);
    }
  }
}

module.exports = new UserService();
