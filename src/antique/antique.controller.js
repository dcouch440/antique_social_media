const antiqueService = require('./antique.service');

class AntiqueController
{

  async index(req, res)
  {
    try
    {
      const {query} = req
      const antiques = await antiqueService.limitOffset({ res, ...query });
      res.json(antiques);
    }
    catch (err)
    {
      console.error(err);
      res.status(422).json(err);
    }
  }

  async show(req, res)
  {
    try
    {
      const {id} = req.params
      const antique = await antiqueService.show(id);
      res.json(antique)
    }
    catch (err)
    {
      console.error(err);
      res.status(422).json(err)
    }
  }

  async destroy(req, res)
  {
    try
    {
      const {authentication} = req.header;
      await antiqueService.destroy(authentication);
      res.status(204);
    }
    catch (err)
    {
      console.error(err);
      res.status(422)
    }
  }

  async create(req, res)
  {
    try
    {
      const { name, year } = req.body;
      const { authentication } = req.headers;
      const antique = await antiqueService.create({ res , name, year, user_id: authentication });
      res.status(201).json(antique);
    }
    catch (err)
    {
      console.error(err);
      res.json(422);
    }
  }

}

module.exports = new AntiqueController();
