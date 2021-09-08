
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const { UNAUTHORIZED } = require('../constant/exceptions');


'use strict';

module.exports = function authorizeRequest (req, res, next) {
  try {
    // get user id from user_id header.
    const userIdString = req.headers.user_id;
    // change value to number to compare the same type.
    const user_id = parseInt(userIdString);
    // get token from cookies that contains secret user_id.
    const { token } = cookieParser.JSONCookies(req.cookies);
    // decrypt token user_id and rename
    const { id: decryptedId } = jwt.verify(token, process.env.JWT_SECRET);

    // if values do not match throw error.
    if (user_id !== decryptedId) {
      // halt request and respond with unauthorized.
      throw new Error(UNAUTHORIZED);
    } else {
      // proceed if checks are met.
      return next();
    }

  } catch ({ message }) {
    res.status(401).json({ message });
  }
};