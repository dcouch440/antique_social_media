const jwt = require('jsonwebtoken');

// design for user login - signup

'use strict';
module.exports = function deSign (reqToken) {
  try {
    const issuer = process.env.ISS;
    const audience = process.env.AUD;
    const maxAge = process.env.EXP;
    const algorithm = process.env.ALG;
    const subject = process.env.SUB;
    const publicKey = process.env.PUBLIC_KEY;

    const verifyOptions = {
      issuer,
      subject,
      audience,
      maxAge,
      algorithms: [algorithm]
    };

    return jwt.verify(reqToken, publicKey, verifyOptions);

  } catch (err) {
    throw new Error('Bad username or password');
  }
};
