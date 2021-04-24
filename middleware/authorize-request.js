const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

'use strict'
module.exports = async (req, res, next) => {

  try
  {


    if (!req.currentUser) throw new Error();

    const {token} = cookieParser.JSONCookies(req.cookies);
    const {id :decryptedId} = jwt.verify(
      token, process.env.JWT_SECRET
    );
    const {id: userBodyId} = req.body.user

    if (req.currentUser.user_id !== userBodyId) throw new Error()

    if (userBodyId && userBodyId !== decryptedId) {
      throw new Error({message: 'Invalid User'})
    }
    else {
      next()
    }
  }

  catch { res.status(401).json({message: 'Unauthorized'}); }

}