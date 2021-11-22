const userService = require('../user/user.service');

class AntiqueSerializer {
  async serializeWithRelations ({ antique }) {
    try {
      const { user_id } = antique;
      return Object.assign(
        {},
        antique,
        await this._getOwnerRelations({ user_id })
      );
    } catch (err) {
      console.error(err);
    }
  }
  async _getOwnerRelations ({ user_id }) {
    try {
      return await userService.showOvert(user_id);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new AntiqueSerializer();
