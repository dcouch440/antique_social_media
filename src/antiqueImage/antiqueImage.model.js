const { Model } = require('objection');

class AntiqueImage extends Model {
  static get tableName () {
    return 'antique_image';
  }
  static get relationMappings () {
    const Antique = require('../antique/antique.model');

    return {
      users: {
        relation: Model.BelongsToOneRelation,
        modelClass: Antique,
        join: {
          from: 'antique_image.antique_id',
          to: 'antique.id',
        },
      },
    };
  }
}

module.exports = AntiqueImage;
