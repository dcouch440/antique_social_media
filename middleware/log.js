const log = (req,res,next) => {
  const ENV = process.env.NODE_ENV
  ENV === 'development' && console.info(`
    ${req.method}: ${req.url}
    Host: ${req.headers.host}
    Body: ${JSON.stringify(req.body)}
  `);
  next();
}
module.exports = log;