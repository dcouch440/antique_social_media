// this is to throw errors in the service layer
// this is so errors can be progressed to the next()
// layer in the fallowing catch block to send a response.

class ServiceError extends Error {
  constructor (arg, ...props) {
    super(props);

    const { name, http_code, message } = arg;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ServiceError);
    }

    this.name = name;
    this.http_code = http_code;
    this.message = message ?? '';

  }
}

module.exports = ServiceError;