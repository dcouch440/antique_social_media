const moment = require('moment');
const userService = require('../user/user.service');

class AntiqueSerializer
{

  async serializeWithRelations({antiques})
  {
    try
    {
      const {user_id :owner_id} = antiques;
      const mergedData = Array.isArray(antiques) ?
        await Promise.all(this.mergeArray({antiques})):
        await this.mergeObject({antiques, owner_id});

      return mergedData;
    }

    catch (err) { console.error(err); }
  }

  async mergeObject({antiques, owner_id})
  {
    try
    {
      const {created_at} = antiques;
      return Object
        .assign(
          antiques,
          await this.getUserRelations({
            created_at
          }),
          await this.getOwnerRelations({owner_id})
        );
    }

    catch (err) { console.error(err); }
  }

  mergeArray({antiques})
  {
    return antiques.map(async antique => {
      const {created_at} = antique;
      return Object
        .assign(
          antique,
          await this.getUserRelations({
            created_at
          }),
        );
    });
  }

  async getOwnerRelations({owner_id})
  {
    try
    {
      return await userService.showOvert(owner_id);
    }

    catch (err) { console.error(err); }
  }

  async getUserRelations({created_at}) {
    try
    {
      // PREVIOUS FEATURES MOVED TO OTHER AREAS OF APPLICATION
      return ({
        posted: moment(created_at).fromNow()
      });
    }

    catch(err) { console.error(err); }
  }

}

module.exports = new AntiqueSerializer();