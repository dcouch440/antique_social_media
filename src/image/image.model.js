const { Model } = require('objection');

class Image extends Model {
  static get tableName () {
    return 'image';
  }

  static relationMappings () {
    const User = require('../user/user.model');
    const Antique = require('../antique/antique.model');

    return {
      antique: {
        relation: Model.BelongsToOneRelation,
        modelClass: Antique,
        join: {
          from: 'image.antique_id',
          to: 'antique.id'
        }
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'like.user_id',
          to: 'user.id'
        }
      },
    };
  }
}

module.exports = Image;