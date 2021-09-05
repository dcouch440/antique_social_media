const getCurrentUser = require('../../lib/get-current-user');
const userSerializer = require('./user.serializer');
const userService = require('./user.service');
const cookieExpiration = require('../../constant/cookie-time');

class UserController {
  async signIn (req,res) {
    try {
      const reqToken = req.body.token;
      const { token, payload } = await userService.signIn({ reqToken });

      res.cookie('token', token, {
        sameSite: 'strict',
        path: '/',
        expires: cookieExpiration,
        httpOnly: true,
        secure: true
      });

      res.status(200).json(payload);
    } catch (err) {
      console.error(err);
      res.status(403).json({ message: err.message });
    }
  }
  async signUp (req,res) {
    try {
      const reqToken = req.body.token;
      const { payload, token } = await userService.signUp({ reqToken });

      res.cookie('token', token, {
        sameSite: 'strict',
        path: '/',
        expires: cookieExpiration,
        httpOnly: true,
        secure: true
      });

      res.status(201).json(payload);
    } catch (err) {
      console.err(err);
      res.status(403).json({ message: err.message });
    }
  }
  async showByUsername (req,res) {
    try {
      const { usernames } = req.body;
      const users = await userService
        .getUsersByUsername({ usernames });
      const serializedUsers = await userSerializer
        .serializeAllWithUserAvatar(users);
      res.status(200).json(serializedUsers);
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err.message });
    }
  }
  // for dev
  async all (req,res) {
    try {
      const users = await userService.all();
      const serializedUsers = await userSerializer
        .serializeAllWithUserAvatar(users);
      res.status(200).json(serializedUsers);
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err.message });
    }
  }
  async show (req,res) {
    try {
      const { id } = req.params;
      const user = await userService.showOvert(id);
      const serializedUsers = await userSerializer
        .serializeWithUserAvatar(user);
      res.json(serializedUsers);
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err.message });
    }
  }
  async signOut (req, res) {
    try {
      await res
        .status(202)
        .clearCookie('token').send('cookie cleared');
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err.message });
    }
  }
  async session (req,res) {
    try {
      const { user_id: id, ...currentUser } = getCurrentUser(req);
      await res.status(200).json({ id, ...currentUser });
    } catch (err) {
      // no action taken if their is not a current user for sessions;
    }
  }
  async destroy (req,res) {
    try {
      const { id } = req.params;
      await userService.destroy(id);
      res.status(204);
    } catch (err) {
      console.error(err);
      res.status(422).json({ message: err.message });
    }
  }
  async antiquesAll (req,res) {
    try {
      const { id } = req.params;
      const attachment = await userService.antiquesAll(id);
      res.status(200).json(attachment);
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err.message });
    }
  }
}

module.exports = new UserController();