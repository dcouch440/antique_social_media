const { Model } = require('objection');

class Avatar extends Model {
  static get tableName ()
  {
    return 'avatar';
  }

  static relationMappings ()
  {
    const User = require('../user/user.model');

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'avatar.antique_id',
          to: 'user.id'
        }
      }
    };
  }
}

module.exports = Avatar;