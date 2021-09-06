const bcrypt = require('bcrypt');

async function hashPassword ({ username, email, password, admin }) {
  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    return {
      username,
      email,
      password_digest: hashedPassword,
      admin
    };
  } catch (err) {
    console.error(err);
  }
}

async function compareHash ({ inputPassword, userPassword }) {
  try {
    return bcrypt.compare(inputPassword, userPassword);
  } catch (err) {
    console.error(err);
  }
}

module.exports = { hashPassword , compareHash };
