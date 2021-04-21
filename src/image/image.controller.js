const imageService = require('./image.service');


class ImageController
{
  async upload(req,res)
  {
      try
      {
        const {fileStr, antique_id} = req.body
        const uploaded = await imageService.upload({
          fileStr, antique_id
        });
        res.json(uploaded).status(200);
      }

      catch (err) { console.error(err); }
  }

  async destroy(req,res)
  {
    const {antiqueId :antique_id} = req.body
    try
    {
      await imageService.destroyFolderByAntiqueId(antique_id);
      res.json({message: 'Deleted'}).status(204);
    }

    catch (err) { console.error(err); }
  }

}

module.exports = new ImageController();