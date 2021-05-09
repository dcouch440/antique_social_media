const app = require('./app');
const statusSocket = require('./socket/status');
const chatSocket = require('./socket/chat');

const PORT = process.env.PORT || 8080;
const STATUS_PORT = 4000;
const CHAT_PORT = 4001;

statusSocket.listen(STATUS_PORT, () => console.log(
  'socket listening on %d', STATUS_PORT
));

chatSocket.listen(CHAT_PORT, () => console.log(
  'socket listening on %d', CHAT_PORT
));

const server = app.listen(PORT, () => console.log(
  'Updated : Server listening at port %d', PORT
));

module.exports = server;