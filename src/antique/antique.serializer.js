const likeService = require('../like/like.service');
const imageService = require('../image/image.service')
const APIConcerns = require('../concerns/api.concerns');
const moment = require('moment');

class AntiqueSerializer extends APIConcerns
{

  async serializeWithLikes({req, antiques})
  {
    try
    {
      const {user_id} = req.currentUser;
      const mergedData = Array.isArray(antiques) ?
        Promise.all(this.mergeArray({antiques, user_id})):
        this.mergeObject({antiques, user_id});

      return mergedData
    }

    catch (err) { console.error(err) }
  }

  async mergeObject({antiques, user_id})
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
          await this.attachImages(antique_id)
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
          await this.attachOneImage(antique_id)
        )
    })
  }

  async attachImages(antique_id)
  {
    const imagesArray = await imageService.getAllImages(antique_id)
      .catch(err => console.error(err));

    return { image: imagesArray };
  }

  async attachOneImage(antique_id)
  {
    const imageObject = await imageService.getFirstImage(antique_id)
      .catch(err => console.error(err));

    return { image: imageObject }
  }

  async getUserRelations({created_at, user_id, antique_id}) {
    try
    {
      return ({
          liked: await likeService.liked({user_id, antique_id}),
          posted: moment(created_at).fromNow(),
          logged_in: super.isLoggedIn(user_id)
      })
    }

    catch(err) { console.error(err); }
  }

}

module.exports = new AntiqueSerializer();