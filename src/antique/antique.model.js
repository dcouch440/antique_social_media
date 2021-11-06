const { Model } = require('objection');

class Antique extends Model {
  static get tableName () {
    return 'antique';
  }
  static get relationMappings () {
    const User = require('../user/user.model');
    const Like = require('../like/like.model');
    const AntiqueImage = require('../antiqueImage/antiqueImage.model');

    return {
      users: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'antique.user_id',
          to: 'user.id',
        },
      },
      likes: {
        relation: Model.HasManyRelation,
        modelClass: Like,
        join: {
          from: 'antique.id',
          to: 'like.antique_id'
        }
      },
      images: {
        relation: Model.HasManyRelation,
        modelClass: AntiqueImage,
        join: {
          from: 'antique.id',
          to: 'antique_image.antique_id'
        }
      }
    };
  }
}

module.exports = Antique;
