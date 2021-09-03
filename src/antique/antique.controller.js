const antiqueService = require('./antique.service');
const antiqueSerializer = require('./antique.serializer');
const imageService = require('../image/image.service');

class AntiqueController {
  async index (req, res) {
    try {
      const { query } = req;
      const antiques = await antiqueService
        .limitOffset(query);
      const serializedAntiques = await antiqueSerializer
        .serializeAllWithRelations({ antiques });
      res.status(200).json(serializedAntiques);
    } catch (err) {
      res.status(400).json({ message: err.message });
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
      const antique = await antiqueService.show(id);
      const serializedAntiques = await antiqueSerializer
        .serializeWithRelations({ antique });
      res.status(200).json(serializedAntiques);
    } catch (err) {
      console.error(err);
      res.json({ message: err.message });
    }
  }
  async destroy (req, res) {
    try {
      const { id } = req.params;
      const deleted = await antiqueService.destroy(id);
      res.status(204).json(deleted);
    } catch (err) {
      console.error(err);
      res.status(422).json({ message: err.message });
    }
  }
  async create (req, res) {
    try {
      const { file64, ...params } = req.body;
      const antique = await antiqueService.create({
        user_id: req.currentUser.user_id,
        ...params
      });
      try {
        await imageService.upload({ file64, antique_id: antique.id });
      } catch (err) {
        await antiqueService.destroy(antique.id);
        throw new Error(err.message);
      }
      res.status(201).json(antique);
    } catch (err) {
      res.status(200).json({ message: err.message });
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
      res.status(400).json({ message: err.message });
    }
  }
  async usersAntiques (req,res) {
    try {
      const { user_id } = req.params;
      const { query } = req;
      const antiques = await antiqueService
        .getAntiquesByUserId({ user_id, query });
      const antiquesWithImages = await antiqueSerializer
        .serializeAllWithRelations({ antiques });
      res.status(200).json(antiquesWithImages);
    } catch (err) {
      console.error(err);
      res.json({ message: err.message });
    }
  }
}

module.exports = new AntiqueController();