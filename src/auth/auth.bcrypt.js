const bcrypt = require('bcrypt');

async function hashPassword ({ username, email, password }) {
  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    return {
      username,
      email,
      password_digest: hashedPassword
    };
  } catch (err) {
    console.log(err);
  }
}

async function compareHash ({ inputPassword, userPassword }) {
  try {
    return bcrypt.compare(inputPassword, userPassword);
  } catch (err) {
    console.log(err);
  }
}

module.exports = { hashPassword , compareHash };