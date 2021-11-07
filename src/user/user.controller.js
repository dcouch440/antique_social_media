const getCurrentUser = require('../../lib/get-current-user');
const userSerializer = require('./user.serializer');
const userService = require('./user.service');
const cookieExpiration = require('../../constant/cookie-time');

class UserController {
  async signIn (req, res, next) {
    try {
      const { token, payload } = await userService.signIn(req.body);

      res.cookie('token', token, {
        sameSite: 'strict',
        path: '/',
        expires: cookieExpiration,
        httpOnly: true,
        secure: true
      });

      res.status(200).json(payload);
    } catch (err) {
      next(err);
    }
  }
  async signUp (req, res, next) {
    try {
      const { token, payload } = await userService.signUp(req.body);

      res.cookie('token', token, {
        sameSite: 'strict',
        path: '/',
        expires: cookieExpiration,
        httpOnly: true,
        secure: true
      });

      res.status(201).json(payload);
    } catch (err) {
      next(err);
    }
  }
  async showByUsername (req, res, next) {
    try {
      const { usernames } = req.body;
      const users = await userService
        .getUsersByUsername({ usernames });
      const serializedUsers = await userSerializer
        .serializeAllWithUserAvatar(users);
      res.status(200).json(serializedUsers);
    } catch (err) {
      next(err);
    }
  }
  async all (req, res, next) {
    try {
      const users = await userService.all();
      const serializedUsers = await userSerializer
        .serializeAllWithUserAvatar(users);
      res.status(200).json(serializedUsers);
    } catch (err) {
      next(next);
    }
  }
  async show (req, res, next) {
    try {
      const { id } = req.params;
      const user = await userService.showOvert(id);
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }
  async signOut (req, res, next) {
    try {
      await res.status(202).clearCookie('token').send('cookie cleared');
    } catch (err) {
      next(err);
    }
  }
  async session (req, res) {
    try {
      const { user_id: id, ...currentUser } = getCurrentUser(req);
      await res.status(200).json({ id, ...currentUser });
    } catch (err) {
      res.status(200).json();
    }
  }
  async destroy (req, res, next) {
    try {
      const { id } = req.params;
      await userService.destroy(id);
      res.status(204);
    } catch (err) {
      next(err);
    }
  }
  async antiquesAll (req, res, next) {
    try {
      const { id } = req.params;
      const attachment = await userService.antiquesAll(id);
      res.status(200).json(attachment);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new UserController();
