const app = require('./app');
const userService = require('./src/user/user.service');
const server = require('http').createServer(app);

const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
  }
});

const SOCKET_USER_IDS = {};

io.on('connection', () => {console.log('connected');});

io.on('connection', (socket) => {

  socket.on('login', async data => {
    console.log('a user ' + data.id + ' connected');
    await userService.changeOnlineState({id: data.id, online: true});
    console.log('data.id' ,data.id);
    SOCKET_USER_IDS[socket.id] = data.id;
  });

  socket.on('disconnect', async () => {
    console.log('user ' + SOCKET_USER_IDS[socket.id] + ' disconnected');
    await userService.changeOnlineState({id: SOCKET_USER_IDS[socket.id], online: false});
    delete SOCKET_USER_IDS[socket.id];
  });

});


module.exports = server;