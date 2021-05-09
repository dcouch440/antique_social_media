const { Model } = require('objection');

class User extends Model {
  static get tableName () {
    return 'user';
  }

  static get relationMappings () {
    const Antique = require('../antique/antique.model');
    const Like = require('../like/like.model');
    const Avatar = require('../avatar/avatar.model');

    return {
      users: {
        relation: Model.BelongsToOneRelation,
        modelClass: Antique,
        join: {
          from: 'user.id',
          to: 'antique.user_id'
        }
      },
      likes: {
        relation: Model.HasManyRelation,
        modelClass: Like,
        join: {
          from: 'user.id',
          to: 'like.user_id'
        }
      },
      avatar: {
        relation: Model.HasOneRelation,
        modelClass: Avatar,
        join: {
          from: 'user.id',
          to: 'avatar.user_id'
        }
      }
    };

  }
}

module.exports = User;