const { Model } = require('objection');

class Like extends Model {
  static get tableName () {
    return 'like';
  }
  static relationMappings () {
    const User = require('../user/user.model');
    const Antique = require('../antique/antique.model');

    return {
      liker: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'like.user_id',
          to: 'user.id'
        }
      },
      antiques: {
        relation: Model.BelongsToOneRelation,
        modelClass: Antique,
        join: {
          from: 'like.antique_id',
          to: 'antique.id'
        }
      },
    };
  }
}

module.exports = Like;
