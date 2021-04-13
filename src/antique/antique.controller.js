const antiqueService = require('./antique.service');

class AntiqueController
{

  async index(req, res)
  {
    try
    {
      console.log(req.query)
      const antiques = await antiqueService.limitOffset(req.query);
      res.json(antiques);
    }
    catch (err)
    {
      console.error(err);
      res.json(500);
    }
  }

  async show(req,res)
  {
    try
    {
      const {id} = req.params
      const antique = await antiqueService.show({id});
      res.json(antique)
    }
    catch (err)
    {
      console.error(err);
      res.status(422).json(err)
    }
  }

  async destroy(req,res)
  {
    try
    {
      const {id} = req.params;
      await antiqueService.destroy({id});
      res.status(204);
    }
    catch (err)
    {
      console.error(err);
      res.status(422)
    }
  }

  async create(req,res)
  {
    try
    {
      const {name, year} = req.body;
      const {user_id} = req.params;
      await antiqueService.create({name,year,user_id});
      res.json(201)
    }
    catch (err)
    {
      console.error(err);
      res.json(422);
    }
  }

}

module.exports = new AntiqueController();
