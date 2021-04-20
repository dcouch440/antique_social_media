const antiqueService = require('./antique.service');
const AntiqueSerializer = require('./antique.serializer');

class AntiqueController
{
 async index(req, res)
  {
    try
    {
      const {query} = req;
      const antiquesWithLiked = await AntiqueSerializer
        .serializeWithLikes({
          req,
          antiques: await antiqueService.limitOffset(query)
        });

      res.json(antiquesWithLiked).status(200);
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
      const {id} = req.params;
      const antique = await AntiqueSerializer
        .serializeWithLikes({
          req,
          antiques: await antiqueService.show(id)
        })
      res.json(antique);
    }

    catch (err)
    {
      console.error(err);
      res.status(422).json(err);
    }
  }

  async destroy(req, res)
  {
    try
    {
      const {id} = req.params
      const deleted = await antiqueService.destroy(id);
      res.status(204).json(deleted);
    }

    catch (err)
    {
      console.error(err);
      res.status(422);
    }
  }

  async create(req, res)
  {
    try
    {
      const { image, name, year, user:{id} } = req.body;
      const antique = await antiqueService.create({
        image, name, year, user_id: id
      });

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
