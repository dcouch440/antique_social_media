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

    if (req.currentUser.user_id !== decryptedId) throw new Error({message: 'Unauthorized'})

    else {
      next()
    }
  }

  catch { res.status(401).json({message: 'Unauthorized'}); }

}