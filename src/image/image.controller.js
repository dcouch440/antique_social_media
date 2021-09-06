const imageService = require('./image.service');

class ImageController {
  async show (req,res) {
    try {
      const { antique_id } = req.params;
      const antiqueImages = await imageService
        .findByAntiqueId(antique_id);
      res.status(200).json(antiqueImages);
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err.message });
    }
  }
  async upload (req,res) {
    try {
      const { file64, antique_id } = req.body;
      const uploaded = await imageService
        .upload({ file64,antique_id });
      res.status(201).json(uploaded);
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err.message });
    }
  }
  async destroy (req,res) {
    const { antiqueId :antique_id } = req.body;
    try {
      await imageService.destroyFolderByAntiqueId(antique_id);
      res.status(204).json({ message: 'Deleted' });
    } catch (err) {
      res.status(400).json({ message: err.message });
      console.error(err);
    }
  }
}

module.exports = new ImageController();
