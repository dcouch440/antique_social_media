const imageService = require('./image.service');


class ImageController
{
  async upload(req,res)
  {
    try
    {
      const {file :fileStr, antique_id} = req.body
      try
      {
        const uploaded = await imageService.upload({fileStr, antique_id});
        res.json(uploaded).status(200);
      }

      catch (err) { console.error(err); }
    }

    catch (err) { console.error(err) }
  }

  async destroy(req,res)
  {
    const {antiqueId :antique_id} = req.body
    try
    {
      const deleted = await imageService.destroyFolderByAntiqueId(antique_id);
      res.json(deleted).status(204);
    }

    catch (err) { console.error(err); }
  }

}

module.exports = new ImageController();