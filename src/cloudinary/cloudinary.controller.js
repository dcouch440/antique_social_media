const cloudinaryService = require('./cloudinary.service');


class CloudinaryController
{
  async upload(req,res)
  {
    try
    {
      const {file :fileStr, antiqueId : antique_id} = req.body
      try
      {
        const uploaded = await cloudinaryService.upload({fileStr, antique_id});
        res.json(uploaded).status(200);
      }

      catch (err)
      {
        console.error(err);
      }
    }

    catch (err)
    {
      console.error(err)
    }
  }

  // async search(req, res)
  // {
  //   try
  //   {
  //     const {data} = req.body
  //     res.imageService(data);
  //   }

  //   catch (err)
  //   {
  //     console.error(err)
  //   }
  // }

}

module.exports = new CloudinaryController();