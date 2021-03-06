const Antique = require('./antique.model');

class AntiqueDAO {
  all () {
    return Antique.query()
      .withGraphFetched('images');
  }
  find (id) {
    return Antique.query()
      .findById(id)
      .withGraphFetched('users')
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
  create ({ parsedParams, image }) {
    const {
      secure_url,
      width,
      height,
      public_id
    } = image;

    return Antique.query().insertGraph({
      ...parsedParams,
      images: [
        {
          secure_url,
          width,
          height,
          public_id
        }
      ]
    });
  }
  limitedList ({ OFFSET, LIMIT }) {
    return Antique.query()
      .offset(OFFSET)
      .limit(LIMIT)
      .withGraphFetched('images');
  }
  findManyByIds (ids) {
    return Antique.query()
      .where(builder => builder.whereIn('id', ids))
      .withGraphFetched('images');
  }
  findAntiquesByUserId (user_id) {
    return Antique.query()
      .where('user_id', user_id)
      .withGraphFetched('images');
  }
  findByUserId ({ user_id, OFFSET, LIMIT }) {
    return Antique.query()
      .where('user_id', user_id)
      .offset(OFFSET)
      .limit(LIMIT)
      .withGraphFetched('images');
  }
}

module.exports = new AntiqueDAO();
