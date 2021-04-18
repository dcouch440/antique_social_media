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
    console.log(params)
    return Antique.query().insert(params)
  }

  limitedList({OFFSET, LIMIT})
  {
    return Antique.query().offset(OFFSET).limit(LIMIT)
  }

}

module.exports = new AntiqueDAO()
