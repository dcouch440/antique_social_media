const bcrypt = require('bcrypt');
const { handleException } = require('../error/error.logger');

const hashPassword = async ({res, username, email, password}) => {

  try
  {
    const hashedPassword = await bcrypt.hash(password, 12);
    return {
      username,
      email,
      password_digest: hashedPassword
    };
  }
  catch (err)
  {
    handleException({res, status: 403, err});
  }

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
  catch (err)
  {
    handleException({res, status: 403, err})
  }

}

module.exports = { hashPassword , compareHash };