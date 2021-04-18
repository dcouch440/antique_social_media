const likeService = require('../like/like.service');
const moment = require('moment');

class AntiqueSerializer
{
  async sendWithLiked({req, antiques})
  {
    // current user is from the cookie
    const {user_id} = req.currentUser;
    const toBeMerged = async (antique) => {
      const {id :antique_id, created_at} = antique;
      return {
        liked: await likeService.liked({user_id, antique_id}),
        posted: moment(created_at).fromNow(),
      }
    }

    const mergedObject = antiques.map(async antique => {
      return Object.assign(antique, await toBeMerged(antique));
    });

    return Promise.all(mergedObject);
  }
}

module.exports = new AntiqueSerializer();