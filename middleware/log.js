const log = (req,res,next) => {
  console.info(`
    ${req.method}: ${req.url}
    Host: ${req.headers.host}
    Body: ${JSON.stringify(req.body)}
  `)
  next()
}
module.exports = log;