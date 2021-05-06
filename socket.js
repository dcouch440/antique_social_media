const app = require('./app');
const socket = require('http').createServer(app);
const store = require('./src/socket-reducer/store');
const {
  userAdded,
  userRemoved,
  roomUserAdded,
  roomCreated,
  roomMessageAdded,
  roomUserRemoved,
  userCurrentRoomAdded,
  userCurrentRoomRemoved,
  getUserFromSocketId

} = require('./src/socket-reducer/actions');


const io = require('socket.io')(socket, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
  }
});


io.on('connection', (socket) => {

  socket.on( 'login',  data => {

    const { id :user_id} = data;
    const { id :socket_id} = socket;

    data.id && console.log('a user ' + data.id + ' connected');
    data.id && userAdded({ socket_id, user_id });

  });

  socket.on( 'disconnect', () => {


    const { id :socket_id} = socket;

    const prev_user = getUserFromSocketId({socket_id});

    if (prev_user)
    {
      const {user_id, current_room :room_id} = prev_user;


      console.log('PREV_USER' , prev_user);
      room_id && roomUserRemoved({ socket_id, room_id, user_id });

      console.log('user ' + user_id + ' disconnected');

      user_id && userRemoved({ socket_id, user_id});
    }

  });

  socket.on( 'join-room' , data => {

    console.log('JOIN-room', data.user_id);
    const { room_id, user_id, username } = data;
    const {id :socket_id} = socket;
    const isRoom = store()['rooms'][room_id];

    if (!isRoom) { roomCreated({room_id}); }

    roomUserAdded({ room_id, user_id, socket_id,  username });
    console.log('ROOM_ID', room_id, 'USER_ID', user_id);
    userCurrentRoomAdded({room_id, user_id, socket_id});

    const room = store()['rooms'][room_id];

    socket.emit('room-updated', room);

  });

  socket.on( 'leave-room' , data => {

    const { room_id, user_id } = data;
    const room = store()['rooms'][room_id];

    roomUserRemoved({ room_id,  user_id });

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