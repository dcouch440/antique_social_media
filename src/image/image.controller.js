const imageService = require('./image.service');

class ImageController {
  async show (req, res, next) {
    try {
      const { antique_id } = req.params;
      const antiqueImages = await imageService
        .findByAntiqueId(antique_id);
      res.status(200).json(antiqueImages);
    } catch (err) {
      next(err);
    }
  }
  async upload (req, res, next) {
    try {
      const { file64, antique_id } = req.body;
      const uploaded = await imageService
        .upload({ file64, antique_id });
      res.status(201).json(uploaded);
    } catch (err) {
      next(err);
    }
  }
  async destroy (req, res, next) {
    const { antiqueId :antique_id } = req.body;
    try {
      await imageService.destroyFolderByAntiqueId(antique_id);
      res.status(204).json({ message: 'Deleted' });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new ImageController();
