const app = require('./app');
const statusSocket = require('./socket/status');
const chatSocket = require('./socket/chat');

const PORT = process.env.PORT || 8080;
const STATUS_SOCKET = 4000;
const CHAT_SOCKET = 4001;

statusSocket.listen(STATUS_SOCKET, () => console.log('socket listening on %d', STATUS_SOCKET));
chatSocket.listen(CHAT_SOCKET, () => console.log('socket listening on %d', CHAT_SOCKET));
app.listen(PORT, () => console.log('Updated : Server listening at port %d', PORT));