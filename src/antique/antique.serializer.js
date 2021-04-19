const likeService = require('../like/like.service');
const APIConcerns = require('../concerns/api.concerns');
const moment = require('moment');

class AntiqueSerializer extends APIConcerns
{

  async sendWithLiked({req, antiques})
  {
    const {user_id} = req.currentUser;

    const mergedObject = antiques.map(async antique => {
      const {id :antique_id, created_at} = antiques;

      return Object.assign(antique, await this.getUserRelations({
          created_at, user_id, antique_id
      }))
    })

    return Promise.all(mergedObject);
  }

  async getUserRelations({created_at, user_id, antique_id}) {
    return (
      {
        liked: await likeService.liked({user_id, antique_id}),
        posted: moment(created_at).fromNow(),
        logged_in: super.isLoggedIn(user_id)
      }
    )
  }

}

module.exports = new AntiqueSerializer();