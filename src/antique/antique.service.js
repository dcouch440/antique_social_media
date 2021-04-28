const antiqueDAO = require('./antique.doa');
const { limitOffset }  = require('./antique.constant');
const { antiqueParams, queryParams } = require('./antique.params');
const { objLength, parseObjectInts } = require('../../lib/utils');
const imageService = require('../image/image.service');

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

  async destroy(id)
  {
    try
    {
      await imageService.destroyDependencyById(id);
      return await antiqueDAO.destroy(id);
    }

    catch (err) { console.error(err); }
  }

  async limitOffset({...query})
  {
    try
    {
      const queries = objLength(query) == 2 ? query : limitOffset
      const parsedQuery = parseObjectInts(queries)
      await queryParams.validate(parsedQuery, {abortEarly: false})
      return antiqueDAO.limitedList(parsedQuery)
    }

    catch(err) { return new Error(err) }
  }

  async create({...params})
  {
    try
    {
      const parsedParams = parseObjectInts(params)
      await antiqueParams.validate(parsedParams, {abortEarly: false})
      return antiqueDAO.create(parsedParams);
    }

    catch (err) { console.error(err) }
  }


  queryCategory({category})
  {
    console.log(category)
    return antiqueDAO.showUniques({category});
  }
}

module.exports = new AntiqueService();