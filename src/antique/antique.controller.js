const antiqueService = require('./antique.service');
const antiqueSerializer = require('./antique.serializer');

class AntiqueController {
  async index (req, res, next) {
    try {
      const { query } = req;
      const antiques = await antiqueService
        .limitOffset(query);
      const serializedAntiques = await antiqueSerializer
        .serializeAllWithRelations({ antiques });
      res.status(200).json(serializedAntiques);
    } catch (err) {
      next(err);
    }
  }
  async likes (req, res, next) {
    try {
      const { id } = req.params;
      const antiqueLikesWithAvatarsAndCount = await antiqueService
        .antiquesWithLikes(id);
      res.status(200).json(antiqueLikesWithAvatarsAndCount);
    } catch (err) {
      next(err);
    }
  }
  async show (req, res, next) {
    try {
      const { id } = req.params;
      const antique = await antiqueService.show(id);
      const serializedAntiques = await antiqueSerializer
        .serializeWithRelations({ antique });
      res.status(200).json(serializedAntiques);
    } catch (err) {
      next(err);
    }
  }
  async destroy (req, res, next) {
    try {
      const { id } = req.params;
      const deleted = await antiqueService.destroy(id);
      res.status(204).json(deleted);
    } catch (err) {
      next(err);
    }
  }
  async create (req, res, next) {
    try {
      const { file64, ...params } = req.body;
      const antique = await antiqueService.create({ file64, ...params });
      res.status(201).json(antique);
    } catch (err) {
      next(err);
    }
  }
  async queryCategory (req, res, next) {
    try {
      const { category } = req.params;
      const response = await antiqueService
        .queryCategory({ category });
      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }
  async usersAntiques (req, res, next) {
    try {
      const { user_id } = req.params;
      const { query } = req;
      const antiques = await antiqueService
        .getAntiquesByUserId({ user_id, query });
      const antiquesWithImages = await antiqueSerializer
        .serializeAllWithRelations({ antiques });
      res.status(200).json(antiquesWithImages);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new AntiqueController();
