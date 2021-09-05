const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

'use strict';
module.exports = function getCurrentUser (req) {
  try {
    const { token } = cookieParser.JSONCookies(req.cookies);
    const decryptedUser = jwt.verify(
      token, process.env.JWT_SECRET
    );

    const {
      id: user_id,
      username,
      email,
      admin
    } = decryptedUser;

    const user = {
      user_id,
      username,
      email,
      admin
    };

    Object.freeze(user);

    return user;

  } catch (err) {
    throw new Error('Unauthorized');
  }

};
