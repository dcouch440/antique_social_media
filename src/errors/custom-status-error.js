class CustomStatusError extends Error {
  constructor (name, ...params) {
    super(params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomStatusError);
    }

    this.name = name || '';
    this.date = new Date();
  }
}

module.exports = CustomStatusError;