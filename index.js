const express = require('express');
const logger = require('./lib/logger');
const PORT = process.env.PORT || 3000;
const router = require('./routes');
const app = express();

app.use(router);
app.use(logger.middleWare)

app.listen(PORT, () => {
  logger.info('Server running on port %d', PORT);
});