const imageService = require('./image.service');


class ImageController
{
  async upload(req,res)
  {
    try
    {
      const {file64, antique_id} = req.body;
      const uploaded = await imageService.upload({
        file64, antique_id: antique_id
      });
      res.status(201).json(uploaded);
    }

    catch (err) { console.error(err); }
  }

  async destroy(req,res)
  {
    const {antiqueId :antique_id} = req.body;
    try
    {
      await imageService.destroyFolderByAntiqueId(antique_id);
      res.status(204).json({message: 'Deleted'});
    }

    catch (err) { console.error(err); }
  }

  // AUTHORIZE IMAGE ROUTES
  async uploadAvatar(req,res)
  {
    try
    {
      const {file64} = req.body;
      const uploaded = await imageService.uploadAvatar({
        file64, user_id: req.currentUser.user_id
      });

      res.status(201).json(uploaded);
    }

    catch (err) { console.error(err); }
  }

}

module.exports = new ImageController();