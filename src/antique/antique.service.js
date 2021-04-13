const antiqueDAO = require('./antique.doa');
const { antiqueParams, queryParams } = require('./antique.params');
const { limitOffset } = require('./antique.constant');
const { objLength } = require('../../lib/utils');

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
      const {LIMIT, OFFSET} = objLength(queries) === 2 ? queries : limitOffset
      const formatParams = { LIMIT: parseInt(LIMIT), OFFSET: parseInt(OFFSET) }
      await queryParams.validate(formatParams, {abortEarly: false})
      return antiqueDAO.limitedList(formatParams)
    }
    catch (err)
    {
      console.error(err)
      return err
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
      return err
    }
  }

}

module.exports = new AntiqueService();