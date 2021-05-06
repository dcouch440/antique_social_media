const app = require('./app');
const socket = require('http').createServer(app);

const {
  userCameOnline,
  userWentOffline,
  getUserIdBySocketId
} = require('./src/online-status/actions');


const io = require('socket.io')(socket, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
  }
});

io.on('connection', (socket) => {
  socket.emit('connection', 'lol');

  socket.on( 'login',  data => {
    socket.emit('login', 'lol');

    const { id :user_id} = data;
    const { id :socket_id} = socket;

    data.id && console.log('a user ' + data.id + ' connected');
    data.id && userCameOnline({ socket_id, user_id });

  });

  socket.on( 'disconnect', () => {

    const { id :socket_id } = socket;
    const user_id = getUserIdBySocketId({socket_id});

    console.log('user ' + user_id + ' disconnected');
    user_id && userWentOffline({ socket_id, user_id });

  });

  socket.on( 'test', data => {
    console.log('received', data);
    socket.emit('test', 'received ' +  data);
  });

});


module.exports = socket;