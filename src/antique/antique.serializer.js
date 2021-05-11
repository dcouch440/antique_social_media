const userService = require('../user/user.service');

class AntiqueSerializer {
  async serializeWithRelations ({ antique }) {
    try {
      const { user_id :owner_id } = antique;
      return this.mergeObject({ antique, owner_id });
    } catch (err) {
      console.error(err);
    }
  }
  async mergeObject ({ antique, owner_id }) {
    try {
      return Object
        .assign({},
          antique,
          await this.getOwnerRelations({ owner_id }),
          await this.getLikeUserAndAvatar({ antique })
        );
    } catch (err) {
      console.error(err);
    }
  }
  async getLikeUserAndAvatar ({ antique }) {
    try {
      const user_ids = antique.likes.map(likes => likes.user_id);
      const likes = await userService.getUsersByIds(user_ids);
      return { likes };
    } catch (err) {
      console.error(err);
    }
  }
  async getOwnerRelations ({ owner_id }) {
    try {
      return await userService.showOvert(owner_id);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new AntiqueSerializer();