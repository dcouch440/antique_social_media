// const bcrypt = require('bcrypt');
// const { handleException } = require('../error/error.logger')

// const hashPassword = async ({res, username, email, password}) => {

//   try
//   {
//     const hashedPassword = await bcrypt.hash(password, 12)
//     return {
//       username,
//       email,
//       password_digest: hashedPassword
//     }
//   }
//   catch (err)
//   {
//     handleException({res, status: 403, err})
//   }

// }

// const compareHash = async ({res, input, user}) => {

//   try
//   {
//     const isValid = await bcrypt.compare(input, user);
//     if (!isValid)
//     {
//       throw new Error()
//     }
//   }
//   catch (err)
//   {
//     handleException({res, status: 403, err})
//   }

// }

// module.exports = { hashPassword , compareHash }