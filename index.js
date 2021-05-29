const app = require('./app');
const statusSocket = require('./socket/status');

const PORT = process.env.PORT || 3001;
const STATUS_PORT = 3002;

statusSocket.listen(STATUS_PORT, () => console.log(
  'socket listening on %d', STATUS_PORT
));

const server = app.listen(PORT, () => console.log(
  'Updated : Server listening at port %d', PORT
));

module.exports = server;