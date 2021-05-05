const app = require('./app');
const socket = require('http').createServer(app);
const store = require('./src/socket-reducer/store');
const {
  userAdded, userRemoved, roomUserAdded, roomCreated,
  roomMessageAdded
} = require('./src/socket-reducer/actions');

const io = require('socket.io')(socket, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
  }
});

io.on('connection', (socket) => {

  socket.on('login', async data => {

    console.log('a user ' + data.id + ' connected');
    data.id && await userAdded({
      socket_id: socket.id, user_id: data.id
    });

  });

  socket.on('disconnect', async () => {

    const user_id = store()[socket.id];
    console.log('user ' + user_id + ' disconnected');
    user_id && await userRemoved({
      socket_id: socket.id, user_id: user_id
    });

  });

  socket.on('join-room', data => {

    const { room_id, user_id, username } = data;
    const room = store()['rooms'][room_id];

    if (!room) { roomCreated({room_id}); }

    roomUserAdded({ room_id, user_id, username});

    socket.emit('room-joined', room);

  });

  socket.on('new-message', data => {
    const {room_id, username, message} = data;

    roomMessageAdded({
      room_id,
      message: {
        message,
        timestamp: new Date(),
        username
      }
    });

    const room = store()['rooms'][room_id];

    socket.emit('message', room);

  });

});


module.exports = socket;