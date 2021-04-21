const antiqueService = require('./antique.service');
const AntiqueSerializer = require('./antique.serializer');
const imageService = require('../image/image.service');

class AntiqueController
{
 async index(req, res)
  {
    try
    {
      const {query} = req;
      const antiquesWithLiked = await AntiqueSerializer
        .serializeWithRelations({
          req,
          antiques: await antiqueService.limitOffset(query)
        });

      res.status(200).json(antiquesWithLiked);
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
        .serializeWithRelations({
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
      const {name, year, user:{id}, fileStr } = req.body;

      const antique = await antiqueService.create({
        name, year, user_id: id
      })

      await imageService.upload({fileStr, antique_id: antique.id })

      res.status(201).json(antique);
    }

    catch (err)
    {
      console.error(err);
      res.json(422);
    }
  }

  async queryCategory(req,res)
  {
    const { category } = req.params
    const response = await antiqueService.queryCategory({category});
    res.status(200).json(response);
  }
}

module.exports = new AntiqueController();
