const userDAO = require('./user.doa');
const jwt = require('../auth/auth.jwt');
const { hashPassword , compareHash } = require('../auth/auth.bcrypt');
const { newUserParams, userIdParams } = require('./user.params');
const { UNAUTHORIZED } = require('../../constant/exceptions');
const ServiceError = require('../../lib/service-error');

class UserService {
  async signIn ({ email, password }) {
    try {
      const downCasedEmail = email.toLowerCase();
      const user = await userDAO.findByEmail(downCasedEmail);

      // if user found, exit with error
      if (!user) {
        throw { name: UNAUTHORIZED };
      }

      // check if user password is correct
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

      // sign token for http cookie
      const token = await jwt.sign(payload);

      return { token, payload };
    } catch (err) {
      throw new ServiceError(err);
    }
  }
  async signUp ({ username, password, email }) {
    try {
      // downcase before saving. Capitalization can be achieved on the front end.
      const downCasedEmail = email.toLowerCase();
      const downCasedUsername = username.toLowerCase();
      const user = await userDAO.findByEmail(downCasedEmail);

      // if user found, exit with error
      if (user) {
        throw { name: UNAUTHORIZED };
      }

      // validating data is correct
      const userParams = { password, username: downCasedUsername, email: downCasedEmail };
      await newUserParams.validate(userParams, { abortEarly: false });

      // hashing password for db.
      const hashedPasswordUser = await hashPassword({ ...userParams });
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
  async uploadAvatar ({ file64, user_id }) {
    try {
      const { avatar_public_id } = await userDAO.find(user_id) ?? {};
      // if public id exists destroy the old image.
      if (avatar_public_id) {
        await userDAO.destroyById(avatar_public_id);
      }
      // upload new image
      const { public_id, secure_url } = await userDAO.uploadAvatar({ file64 });
      // save response in database
      return userDAO.saveAvatarInfo({ public_id, secure_url, user_id });
    } catch (err) {
      throw new ServiceError(err);
    }
  }
  async getUsersByIds (ids) {
    try {
      return await userDAO.getUsersByIds(ids);
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
