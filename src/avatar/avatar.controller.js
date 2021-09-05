const avatarService = require('./avatar.service');

class AvatarController {
  async destroy (req,res) {
    const { user_id } = req.body;
    try {
      await avatarService.deleteByPublicId(user_id);
      res.status(204).json({ message: 'Deleted' });
    } catch (err) {
      console.error(err);
      res.status(422).json({ message: err.message });
    }
  }
  async upload (req,res) {
    try {
      const { user_id } = req.body;
      const { file64 } = req.body;
      const uploaded = await avatarService.upload({
        file64,
        user_id
      });
      res.status(201).json(uploaded);
    } catch (err) {
      console.error(err);
      res.status(422).json({ message: err.message });
    }
  }
}

module.exports = new AvatarController();