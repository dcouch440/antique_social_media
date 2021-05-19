const avatarService = require('./avatar.service');

class AvatarController {
  async destroy (req,res) {
    const user_id = req.currentUser.user_id;
    try {
      await avatarService.deleteByPublicId(user_id);
      res.status(204).json({ message: 'Deleted' });
    } catch (err) {
      console.error(err);
      res.status(422).json({ message: err.message });
    }
  }
  // AUTHORIZE IMAGE ROUTES
  async upload (req,res) {
    try {
      const { file64 } = req.body;
      const uploaded = await avatarService.upload({
        file64,
        user_id: req.currentUser.user_id
      });

      res.status(201).json(uploaded);
    } catch (err) {
      console.error(err);
      res.status(422).json({ message: err.message });
    }
  }
}

module.exports = new AvatarController();