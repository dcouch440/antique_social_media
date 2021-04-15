const antiqueDAO = require('./antique.doa');
const { limitOffset } = require('./antique.constant');
const { handleException } = require('../error/error.logger');
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

  async limitOffset({res, ...query})
  {
    try
    {
      const queries = objLength(query) == 2 ? query : limitOffset
      const parsedQuery = parseObjectInts(queries)
      await queryParams.validate(parsedQuery, {abortEarly: false})
      return antiqueDAO.limitedList(parsedQuery)
    }
    catch (err)
    {
      handleException({res, status: 422, err})
    }
  }

  async create({res, ...params})
  {
    try
    {
      const parsedParams = parseObjectInts(params)
      await antiqueParams.validate(parsedParams, {abortEarly: false})
      return antiqueDAO.create(parsedParams);
    }
    catch (err)
    {
      handleException({res, status: 422, err})
    }
  }

}

module.exports = new AntiqueService();