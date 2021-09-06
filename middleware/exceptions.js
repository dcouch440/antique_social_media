const {
  UNAUTHORIZED,
  UNIQUE_VIOLATION,
  VALIDATION_ERROR
} = require('../constant/exceptions');

const status = {
  [UNAUTHORIZED]: 422,
  [UNIQUE_VIOLATION]: 409,
  [VALIDATION_ERROR]: 401
};

const errorMessages = {
  UniqueViolationError: 'Already exists.',
  Unauthorized: 'Invalid username or password'
};

const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const handleError = (error, _, res, next) => {

  if (!error) {
    next();
  }

  const statusCode = res.statusCode === 200
    ? (status[error.name] || 500)
    : res.statusCode;

  res.status(statusCode);

  res.json({
    message: errorMessages[error.name] || error.message,
  });

};

module.exports = { notFound, handleError };
