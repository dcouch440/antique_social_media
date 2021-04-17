const jwt = require('jsonwebtoken');
require('dotenv').config('.env')

module.exports = (req, res, next) => {
  try
  {
    const {headers:{authorization}} = req;
    const {id :decryptedId} = jwt.verify(authorization, process.env.JWT_SECRET);
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