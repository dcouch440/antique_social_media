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

  async limitOffset({...query})
  {
    try
    {
      const queries = objLength(query) == 2 ? query : limitOffset
      const parsedQuery = parseObjectInts(queries)
      queryParams.validate(parsedQuery, {abortEarly: false})
      return antiqueDAO.limitedList(parsedQuery)
    }
    catch(err)
    {
      return new Error(err)
    }
  }

  async create({...params})
  {
    try
    {
      const parsedParams = parseObjectInts(params)
      await antiqueParams.validate(parsedParams, {abortEarly: false})
      return antiqueDAO.create(parsedParams);
    }

    catch (err)
    {
      console.error(err)
    }

  }
}

module.exports = new AntiqueService();