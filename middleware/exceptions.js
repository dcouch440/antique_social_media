const {
  UNAUTHORIZED,
  UNIQUE_VIOLATION,
  VALIDATION_ERROR,
} = require('../constant/exceptions');


function handleError (error, _, res, next) {

  if (!error) {
    return next();
  }

  process.env.NODE_ENV === 'development' && console.error(error);


  const status = {
    [UNAUTHORIZED]: 401,
    [UNIQUE_VIOLATION]: 409,
    [VALIDATION_ERROR]: 400,
  };

  const errorMessages = {
    [UNAUTHORIZED]: 'Invalid username or password'
  };
  // grabbing errors from validation error
  const { errors } = error;
  // check if status code is attached.
  const hasHttpStatusAttached = typeof error.http_code === 'number';
  // status code has not been updated yet.
  const hasNotBeenSet = res.statusCode === 200;
  // set new status code or return a 500
  const newStatusCode = status[error.name] ?? 500;
  // check if a message is available or return the original message.
  const message = errorMessages[error.name] ?? error.message;
  // set status code for the outgoing error message.
  const statusCode = hasHttpStatusAttached
    // if http code is present return http code.
    ? error.http_code
    // check if status has not already been set
    : hasNotBeenSet
      // update status with new code
      ? newStatusCode
      // else return the original status code.
      : res.statusCode;


  res.status(statusCode).json({ message, errors });

}


module.exports = handleError;
