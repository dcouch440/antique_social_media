const likeService = require('./like.service');

class AntiqueController
{
  async like(req,res)
  {
    try
    {
      const {antique_id, user_id} = req;
      const liked = likeService.like({
        res, antique_id, user_id
      })
      res.json(liked).status(200)
    }

    catch(err)
    {
      console.error(err)
    }
  }

  async unlike(req,res)
  {
    try
    {
      const {antique_id, user_id} = req;
      const liked = likeService.unlike({
        res, antique_id, user_id
      })
      res.json(liked).status(200)
    }

    catch(err)
    {
      console.error(err)
    }
  }
}

module.exports = new AntiqueController();
