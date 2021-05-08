const userService = require('./user.service');

class UserController {

  async signIn (req,res)
  {
    try
    {
      const { username, password, email } = req.body;
      const payload = await userService.signIn({
        res, username, password, email
      });
      res.status(200).json(payload);
    }

    catch (err) { res.status(403).json(err); }
  }

  async signUp (req,res)
  {
    try
    {
      const { username, password, email } = req.body;
      const payload = await userService.signUp({
        res, username, password, email
      });
      res.status(201).json(payload);
    }
    catch (err)
    {
      console.error(err);
      res.status(403).json(err);
    }
  }

  async showByUsername (req,res)
  {
    try
    {
      const { usernames } = req.body;
      console.log(req.body);
      const users = await userService.getUsersByUsername({
        usernames
      });
      console.log(users);
      res.status(200).json(users);
    }

    catch (err) { console.error(err); }
  }

  // for dev
  async all (req,res)
  {
    try
    {
      const users = await userService.all();
      res.status(200).json(users);
    }

    catch (err) { console.error(err); }
  }

  async show (req,res)
  {

    try
    {
      const { id } = req.params;
      const user = await userService.show(id);
      res.json(user);
    }

    catch (err)
    {
      console.log(err);
      res.status(422).json(err);
    }

  }

  async signOut (req, res)
  {
    try
    {
      await res
        .status(202)
        .clearCookie('token').send('cookie cleared');
    }

    catch (err) { console.error(err); }
  }

  async session (req,res)
  {
    try
    {
      const { user_id :id, ...currentUser } = req.currentUser;
      await res.status(200).json({ id, ...currentUser });
    }

    catch (err) { res.status(401); }
  }

  async destroy (req,res)
  {
    try
    {
      const { id } = req.params;
      await userService.destroy(id);
      res.status(204);
    }

    catch (err)
    {
      console.log(err);
      res.status(422);
    }
  }

  async antiquesAll (req,res)
  {
    try
    {
      const { id } = req.params;
      const attachment = await userService.antiquesAll(id);
      res.status(200).json(attachment);
    }

    catch (err) {
      console.error(err);
      res.json(404);
    }
  }

}

module.exports = new UserController();
