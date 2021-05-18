const Antique = require('./antique.model');

class AntiqueDAO {
  all () {
    return Antique.query();
  }
  find (id) {
    return Antique.query()
      .findById(id);
  }
  getLikes (id) {
    return Antique.query()
      .findById(id)
      .withGraphFetched('like');
  }
  destroy (id) {
    return Antique.query()
      .deleteById(id);
  }
  create (params) {
    return Antique.query()
      .insert(params);
  }
  limitedList ({ OFFSET, LIMIT }) {
    return Antique.query()
      .offset(OFFSET)
      .limit(LIMIT);
  }
  findManyById (id) {
    return Antique.query().where(builder => builder.whereIn('id', id));
  }
  findAntiquesByUserId (user_id) {
    return Antique.query().where('user_id', user_id);
  }
  showUniques ({ category }) {
    return Antique.query()
      .distinct(category, 'id');
  }
  findByUserId ({ user_id, OFFSET, LIMIT }) {
    return Antique.query()
      .where('user_id', user_id)
      .offset(OFFSET)
      .limit(LIMIT);
  }
}

module.exports = new AntiqueDAO();