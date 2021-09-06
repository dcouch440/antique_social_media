const jwt = require('jsonwebtoken');

// signs the payload for user login and sign up.

const sign = userCredentials => {

  const privateKey = process.env.REACT_APP_PRIVATE_KEY;
  const issuer = process.env.REACT_APP_ISS;
  const subject = process.env.REACT_APP_SUB;
  const audience = process.env.REACT_APP_AUD;
  const expiresIn = process.env.REACT_APP_EXP;
  const algorithm = process.env.REACT_APP_ALG;

  const signOptions = {
    issuer,
    subject,
    audience,
    expiresIn,
    algorithm
  };

  const token = jwt.sign(userCredentials, privateKey, signOptions);

  return token;

};

export default sign;