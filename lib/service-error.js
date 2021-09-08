/**
 * Used to forward errors through the service layer to the controller.
 * Useful data is passed through and stored.
 * If no http_code is found it will later be set by the exception middleware.
 */

class ServiceError extends Error {
  constructor (arg, ...props) {
    super(props);

    const { name, http_code, message, errors } = arg;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ServiceError);
    }

    this.name = name;
    this.http_code = http_code;
    this.message = message ?? '';
    this.errors = errors ?? [];

  }
}

module.exports = ServiceError;