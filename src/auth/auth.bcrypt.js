const bcrypt = require('bcrypt');
const { handleException } = require('../../middleware/logger');

const hashPassword = async ({username, email, password}) => {
  try
  {
    const hashedPassword = await bcrypt.hash(password, 12);
    return {
      username,
      email,
      password_digest: hashedPassword
    };
  }

  catch (err) { console.log(err); }
}

const compareHash = async ({res, inputPassword, userPassword}) => {
  try
  {
    const isValid = await bcrypt.compare(inputPassword, userPassword);
    if (!isValid)
    {
      handleException({res, status: 403, err: {message: 'Password or username incorrect'}});
      throw new Error('bad password');
    }
    return isValid;
  }

  catch (err) { console.log(err); }
}

module.exports = { hashPassword , compareHash };