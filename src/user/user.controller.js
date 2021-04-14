const userService = require('./user.service');

class UserController {


  async signIn(req,res)
  {
    try
    {
      const { username, password_digest, email } = req.body;
      const payload = await userService.signIn({
        username, password_digest, email
      });
      res.json(payload);
    }
    catch(err)
    {
      console.error(err);
      res.status(403).json(err);
    }
  }

  async show(req,res)
  {

    try
    {
      const {id} = req.params
      const user = await userService.show(id);
      res.json(user)
    }
    catch (err)
    {
      console.log(err);
      res.status(422).json(err)
    }

  }

  async destroy(req,res)
  {

    try
    {
      const {id} = req.params;
      await userService.destroy(id);
      res.status(204);
    }
    catch (err)
    {
      console.log(err);
      res.status(422)
    }

  }

  async create(req,res)
  {

    try
    {
      const {username} = req.body;
      await userService.create(username);
      res.json(201)
    }
    catch (err)
    {
      console.error(err);
      res.json(422);
    }

  }

  async antiquesAll(req,res)
  {

    try
    {
      const {id} = req.params;
      const attachment = await userService.antiquesAll(id);
      res.json(attachment)
    }
    catch (err) {
      console.error(err);
      res.json(404);
    }

  }

}

module.exports = new UserController();
