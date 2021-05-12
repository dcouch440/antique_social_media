const likeService = require('../like/like.service');
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
      return Object.assign(
        {},
        antique,
        await this.getOwnerRelations({ owner_id }),
        await this.getLikesUserAndAvatar({ antique }),
        await this.getLikesCount({ antique })
      );
    } catch (err) {
      console.error(err);
    }
  }
  async getLikesCount ({ antique }) {
    try {
      const { id :antique_id } = antique;
      const likeCount = await likeService.getLikesCountByAntiqueId({ antique_id });
      return { likeCount };
    } catch (err) {
      console.error(err);
    }
  }
  async getLikesUserAndAvatar ({ antique }) {
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