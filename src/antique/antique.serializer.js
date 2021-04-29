const likeService = require('../like/like.service');
const APIConcerns = require('../concerns/api.concerns');
const moment = require('moment');
const userService = require('../user/user.service');

class AntiqueSerializer extends APIConcerns
{

  async serializeWithRelations({req, antiques})
  {
    try
    {
      const {user_id} = req.currentUser;
      const {user_id :owner_id} = antiques
      const mergedData = Array.isArray(antiques) ?
        await Promise.all(this.mergeArray({antiques, user_id})):
        await this.mergeObject({antiques, user_id, owner_id});

      return mergedData
    }

    catch (err) { console.error(err); }
  }

  async mergeObject({antiques, user_id, owner_id})
  {
    try
    {
      const {id :antique_id, created_at} = antiques;
      return Object
        .assign(
          antiques,
          await this.getUserRelations({
            created_at, user_id, antique_id
          }),
          await this.getOwnerRelations({owner_id})
        )
    }

    catch (err) { console.error(err); }
  }

  mergeArray({antiques, user_id})
  {
    return antiques.map(async antique => {
      const {id :antique_id, created_at} = antique;
      return Object
        .assign(
          antique,
          await this.getUserRelations({
            created_at, user_id, antique_id
          }),
        )
    })
  }

  async getOwnerRelations({owner_id})
  {
    try
    {
      return await userService.showOvert(owner_id)
    }

    catch (err) { console.error(err); }
  }

  async getUserRelations({created_at, user_id, antique_id}) {
    try
    {
      // LOGGED IN IS FOR PREVIOUS INTENTIONS -> MIGHT DELETE -> REPLACED WITH LOCAL CONTEXT
      return ({
        liked: await likeService.liked({user_id, antique_id}),
        posted: moment(created_at).fromNow(),
        logged_in: super.isLoggedIn(user_id)
      });
    }

    catch(err) { console.error(err); }
  }

}

module.exports = new AntiqueSerializer();