const avatarService = require('./avatar.service');

class AvatarController {
  async destroy (req, res, next) {
    const { user_id } = req.body;
    try {
      await avatarService.deleteByPublicId(user_id);
      res.status(204).json({ message: 'Deleted' });
    } catch (err) {
      next(err);
    }
  }
  async upload (req, res, next) {
    try {
      const { user_id } = req.body;
      const { file64 } = req.body;
      const uploaded = await avatarService.upload({ file64, user_id });
      res.status(201).json(uploaded);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new AvatarController();
