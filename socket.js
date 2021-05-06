const app = require('./app');
const socket = require('http').createServer(app);
const store = require('./src/socket-reducer/store');
const {
  userAdded, userRemoved, roomUserAdded, roomCreated,
  roomMessageAdded, roomUserRemoved
} = require('./src/socket-reducer/actions');


const io = require('socket.io')(socket, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
  }
});


io.on('connection', (socket) => {

  socket.on( 'login', async data => {

    const { id :user_id} = data;
    const { id :socket_id} = socket;

    data.id && console.log('a user ' + data.id + ' connected');

    data.id && await userAdded({ socket_id, user_id});

  });

  socket.on( 'disconnect', async () => {

    const user_id = store()['users'][socket.id];
    const { id :socket_id} = socket;

    user_id && console.log('user ' + user_id + ' disconnected');
    user_id && await userRemoved({ socket_id, user_id });

  });

  socket.on( 'join-room' , data => {

    const { room_id, user_id, username } = data;
    const isRoom = store()['rooms'][room_id];

    if (!isRoom) { roomCreated({room_id}); }

    roomUserAdded({ room_id, user_id, username });

    const room = store()['rooms'][room_id];

    console.log(room);
    socket.emit('room-updated', room);

  });

  socket.on( 'leave-room' , data => {
    const { room_id, user_id } = data;
    const room = store()['rooms'][room_id];

    roomUserRemoved({ room_id, user_id });
    socket.emit('room-updated', room);

  });

  socket.on( 'new-message' , data => {
    const { room_id, username, message } = data;

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