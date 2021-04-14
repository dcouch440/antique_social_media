const jwt = require('jsonwebtoken');
require('dotenv').config('.env')

module.exports = (req, res, payload, next ) => {
  try
  {
    const {user_id} = jwt.verify(payload, process.env.JWT_SECRET);
    const {requestUserId} = req.body
    if (requestUserId && requestUserId !== user_id)
    {
      throw new Error({message: 'Invalid User'})
    }
    else
    {
      next()
    }
  }
  catch
  {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
}