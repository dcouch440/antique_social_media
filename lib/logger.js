// const pino = require('pino');
// const expressPino = require('express-pino-logger');
// const logger = pino({ level: process.env.LOG_LEVEL || 'info' });
// const expressLogger = expressPino({ logger });

// const logRequest = () => {
//   logger.debug('Calling req.send');
// };
// const logResponse = () => {
//   logger.debug('Calling res.send');
// };

// // debug $ node DEBUG=express:* node index.js
// module.exports = {
//   info: arg => logger.info(arg),
//   debugRequest: logRequest,
//   debugResponse: logResponse,
//   middleWare: expressLogger,
// };

