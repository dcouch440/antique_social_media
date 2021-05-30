const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

'use strict';
module.exports = async (req, res, next) => {
  try {
    const userIdString = req.headers.user_id;
    const user_id = parseInt(userIdString);
    const { token } = cookieParser.JSONCookies(req.cookies);
    const { id :decryptedId } = jwt.verify(
      token, process.env.JWT_SECRET
    );
    if (user_id !== decryptedId) {
      throw new Error('Unauthorized');
    } else {
      next();
    }
  } catch (err) {
    res.status(401).json(err);
  }
};