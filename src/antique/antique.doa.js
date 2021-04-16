const P = require('pino');
const Antique = require('./antique.model');

class AntiqueDAO
{

  all()
  {
    return Antique.query();
  }

  find(id)
  {
    return Antique.query().findById(id);
  }

  destroy(id)
  {
    return Antique.query().deleteById(id);
  }

  create(params)
  {
    return Antique.query().insert(params)
  }

  limitedList({OFFSET, LIMIT})
  {
    return Antique.query().offset(OFFSET).limit(LIMIT)
  }

}

module.exports = new AntiqueDAO()
