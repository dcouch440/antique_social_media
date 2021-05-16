const antiqueService = require('./antique.service');
const antiqueSerializer = require('./antique.serializer');
const imageService = require('../image/image.service');

class AntiqueController {
  async index (req, res) {
    try {
      const { query } = req;
      const antiques = await antiqueSerializer
        .serializeWithRelations({
          antique: await antiqueService.limitOffset(query)
        });
      res.status(200).json(antiques);
    } catch (err) {
      console.error(err);
      res.status(422).json(err);
    }
  }
  async likes (req, res) {
    try {
      const { id } = req.params;
      const antiqueLikesWithAvatarsAndCount = await antiqueService
        .antiquesWithLikes(id);
      res.status(200).json(antiqueLikesWithAvatarsAndCount);
    } catch (err) {
      console.error(err);
    }
  }
  async show (req, res) {
    try {
      const { id } = req.params;
      const antique = await antiqueSerializer
        .serializeWithRelations({
          antique: await antiqueService.show(id)
        });
      res.json(antique);
    } catch (err) {
      console.error(err);
      res.status(422).json(err);
    }
  }
  async destroy (req, res) {
    try {
      const { id } = req.params;
      const deleted = await antiqueService.destroy(id);
      res.status(204).json(deleted);
    } catch (err) {
      console.error(err);
      res.status(422);
    }
  }
  async create (req, res) {
    try {
      const { file64, ...params } = req.body;
      const antique = await antiqueService.create({
        user_id: req.currentUser.user_id,
        ...params
      });
      await imageService.upload({ file64, antique_id: antique.id });
      res.status(201).json(antique);
    } catch (err) {
      console.error(err);
      res.json(422);
    }
  }
  async queryCategory (req,res) {
    try {
      const { category } = req.params;
      const response = await antiqueService
        .queryCategory({ category });
      res.status(200).json(response);
    } catch (err) {
      console.error(err);
    }
  }
  async usersAntiques (req,res) {
    try {
      const { user_id } = req.params;
      const antique = await antiqueService
        .getAntiquesByUserId(user_id);
      const antiquesWithImages = await antiqueSerializer
        .serializeWithRelations({ antique });
      res.status(200).json(antiquesWithImages);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new AntiqueController();