const antiqueDAO = require('./antique.doa');
const { limitOffset } = require('./antique.constant');
const { antiqueParams, queryParams } = require('./antique.params');
const { objLength, parseObjectInts } = require('../../lib/utils');

class AntiqueService
{

  all()
  {
    return antiqueDAO.all();
  }

  show(id)
  {
    return antiqueDAO.find(id);
  }

  destroy(id)
  {
    return antiqueDAO.destroy(id);
  }

  limitOffset({...query})
  {
    const queries = objLength(query) == 2 ? query : limitOffset
    const parsedQuery = parseObjectInts(queries)
    queryParams.validate(parsedQuery, {abortEarly: false})
    return antiqueDAO.limitedList(parsedQuery)
  }

  create({res, ...params})
  {
    const parsedParams = parseObjectInts(params)
    antiqueParams.validate(parsedParams, {abortEarly: false})
    return antiqueDAO.create(parsedParams);
  }

}

module.exports = new AntiqueService();