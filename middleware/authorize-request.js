const jwt = require('jsonwebtoken');
require('dotenv').config('.env')

module.exports = (req, res, next) => {
  try
  {

    const {authorization} = req.headers;
    const decryptedId = jwt.verify(authorization, process.env.JWT_SECRET).id;
    const userBodyId = req.body.user.id
    if (userBodyId && userBodyId !== decryptedId)
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
    res.status(401).json('bad');
  }
}