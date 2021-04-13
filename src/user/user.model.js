const { Model } = require('objection');

class User extends Model {

  static get tableName()
  {
    return 'user'
  }

  static get relationMappings()
  {

    const Antique = require('./antique');
    return {
      users: {
        relation: Model.BelongsToOneRelation,
        modelClass: Antique,
        join: {
          from: 'user.id',
          to: 'antique.user_id'
        }
      }
    }

  }

}

module.exports = User