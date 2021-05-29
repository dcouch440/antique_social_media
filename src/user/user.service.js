const userDAO = require('./user.doa');
const jwt = require('../auth/auth.jwt');
const { hashPassword , compareHash } = require('../auth/auth.bcrypt');
const { newUserParams, userIdParams } = require('./user.params');
const cookieExpiration = require('../../constant/cookie-time');
const attachAvatarIfNotPresent = require('../../lib/get-avatar-if-no-present');
const userSerializer = require('./user.serializer');

class UserService {
  async signIn ({ res, password, email }) {
    try {
      const user = await userDAO.findByEmail(email);
      if (!user) {
        throw new Error({ errors: ['Invalid username or Password'] });
      }
      const isValid = await compareHash({
        inputPassword: password, userPassword: user.password_digest
      });
      if (!isValid) {
        throw new Error({ errors: ['Bad Username or Password'] });
      }

      const payload = {
        id: user.id,
        username: user.username,
        email: user.email,
        admin: user.admin
      };

      const token = await jwt.sign(payload);

      res.cookie('token', token, {
        sameSite: 'strict',
        path: '/',
        expires: cookieExpiration,
        httpOnly: true,
        // secure: true,
      });

      return payload;
    } catch (err) {
      res.status(403).json({ message: err.errors });
    }
  }
  async signUp ({ res, username, password, email }) {
    try {
      const user = await userDAO.findByEmail(email);
      if (user) {
        throw new Error({ message: ['Invalid username or Password'] });
      }
      const userParams = { username, password, email };
      await newUserParams.validate(userParams, { abortEarly: false });
      const hashedPasswordUser = await hashPassword({ res, username, email, password });

      const createdUser = await userDAO.create(hashedPasswordUser);
      delete createdUser.password_digest;

      const payload = { id: createdUser.id, username, email, admin: false };
      const token = await jwt.sign(payload);

      res.cookie('token', token, {
        sameSite: 'strict',
        path: '/',
        expires: cookieExpiration,
        httpOnly: true,
        // secure: true,
      });

      return payload;
    } catch (err) {
      res.json(err);
    }
  }
  async changeOnlineState ({ id, online }) {
    try {
      return await userDAO.changeOnlineState({ id, online });
    } catch (err) {
      console.error(err);
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
      console.error(err);
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
      console.error(err);
    }
  }
  async destroy (id) {
    try {
      await userIdParams.validate({ id });
      return userDAO.destroy(id);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new UserService();