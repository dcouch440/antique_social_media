const AntiqueImageService = require('./antiqueImage.service');

class AntiqueImageController {
  async upload (req, res, next) {
    try {
      const { file64, antique_id } = req.body;
      const uploaded = await AntiqueImageService
        .upload({ file64, antique_id });
      res.status(201).json(uploaded);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new AntiqueImageController();
