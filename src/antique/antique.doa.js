const Antique = require('./antique.model');

class AntiqueDAO {
  all () {
    return Antique.query()
      .withGraphFetched('images').limit(1);
  }
  find (id) {
    return Antique.query()
      .findById(id)
      .withGraphFetched('likes')
      .modifyGraph('likes', builder => builder.select('user_id'))
      .withGraphFetched('images');
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
      .limit(LIMIT)
      .withGraphFetched('images');
  }
  findManyById (id) {
    return Antique.query().where(builder => builder.whereIn('id', id))
      .withGraphFetched('images');
  }
  findAntiquesByUserId (user_id) {
    return Antique.query().where('user_id', user_id)
      .withGraphFetched('images');
  }
  showUniques ({ category }) {
    return Antique.query()
      .distinct(category, 'id');
  }
}

module.exports = new AntiqueDAO();
