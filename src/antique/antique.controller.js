const antiqueService = require('./antique.service');

class AntiqueController {
  async index (req, res, next) {
    try {
      const { query } = req;
      const antiques = await antiqueService
        .limitOffset(query);
      res.status(200).json(antiques);
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
      res.status(200).json(antique);
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
  async uploadAntiqueImage (req,res,next) {
    try {
      const { file64, antique_id } = req.body;
      const image = await antiqueService.uploadAntiqueImage({ file64, antique_id });
      res.status(201).json(image);
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
      res.status(200).json(antiques);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new AntiqueController();
