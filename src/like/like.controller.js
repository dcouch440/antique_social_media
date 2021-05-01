const likeService = require('./like.service');

class LikeController
{
  async like(req,res)
  {
    try
    {
      const {antique_id} = req.params;
      const liked = await likeService.like({
        req, antique_id
      });
      res.status(201).json(liked);
    }

    catch(err)
    {
      console.error(err);
      res.status(422).json({message: 'unprocessable entity'});
    }
  }

  async unlike(req,res)
  {
    try
    {
      const {antique_id} = req.params;
      const liked = await likeService.unlike({
        req, antique_id
      });
      res.status(204).json(liked);
    }

    catch(err)
    {
      res.status(422).json({message: 'unprocessable entity'});
    }
  }
}

module.exports = new LikeController();
