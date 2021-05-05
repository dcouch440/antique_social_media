const app = require('./app');
const socket = require('./socket');

const PORT = process.env.PORT || 8080;
const SOCKET = 4000;

socket.listen(SOCKET, () => console.log('socket listening on %d', SOCKET));
app.listen(PORT, () => console.log('Updated : Server listening at port %d', PORT));