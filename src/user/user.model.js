const { Model } = require('objection');

class User extends Model {

  static get tableName()
  {
    return 'user'
  }

  static get relationMappings()
  {

    const Antique = require('../antique/antique.model');
    const Like = require('../like/like.model');
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
        relation: Model.HasOneThroughRelation,
        modelClass: Like,
        join: {
          from: 'user.id',
          through: {
            // persons_movies is the join table.
            from: 'like.person_id',
            to: 'user.movieId'
          },
          to: 'movies.id'
        }
      }
    }

  }

}

module.exports = User