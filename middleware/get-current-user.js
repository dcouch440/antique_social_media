const jwt = require('jsonwebtoken');

'use strict'
const getCurrentUser = async (req, res, next) => {

  try
  {
    // users validate once through the router for all request,
    // these validations will need to exist to continue later.

    const authorization = req.headers.authorization;
    const decryptedUser = jwt.verify(
      authorization, process.env.JWT_SECRET
    );

    const {
      id :userBodyId,
      username :username,
      email :email
    } = decryptedUser

    const user = {user_id: userBodyId, username, email}
    Object.freeze(user);
    req.currentUser = user;
    next();

  }

  catch
  {
    const noUser = {user_id: undefined, username: undefined, email: undefined};
    Object.freeze(noUser);
    req.currentUser = noUser;
    next();
  }

}

module.exports = getCurrentUser;