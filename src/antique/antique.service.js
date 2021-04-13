const antiqueDAO = require('./antique.doa');
const { antiqueParams, queryParams } = require('./antique.yup');
const objLength = require('../../lib/utils');
class AntiqueService
{

  all()
  {
    return antiqueDAO.all();
  }

  show({id})
  {
    return antiqueDAO.find({id});
  }

  destroy({id})
  {
    return antiqueDAO.destroy({id});
  }

  async limitOffset({...queries})
  {
    try
    {
      const {LIMIT, OFFSET} = objLength(queries) > 2 ? queries : {LIMIT: '20', OFFSET: '0'}
      const formatParams = { LIMIT: parseInt(LIMIT), OFFSET: parseInt(OFFSET) }
      await queryParams.validate(formatParams, {abortEarly: false})
      return antiqueDAO.limitedList(formatParams)
    }
    catch (err)
    {
      console.error(err)
    }
  }

  async create({year, ...params})
  {
    try
    {
      const formatParams = {year: parseInt(year), ...params}
      await antiqueParams.validate(formatParams, {abortEarly: false})
      return antiqueDAO.create({params});
    }
    catch (err)
    {
      console.error(err)
    }
  }

}

module.exports = new AntiqueService();