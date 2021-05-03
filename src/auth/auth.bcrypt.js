const bcrypt = require('bcrypt');

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
};

const compareHash = async ({inputPassword, userPassword}) => {
  try
  {
    return bcrypt.compare(inputPassword, userPassword);
  }

  catch (err) { console.log(err); }
};

module.exports = { hashPassword , compareHash };