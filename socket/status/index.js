const app = require('../../app');
const socket = require('http').createServer(app);

const {
  userCameOnline,
  userWentOffline,
  getUserIdBySocketId
} = require('./online-state/actions');

const {
  CONNECTION,
  LOGIN,
  DISCONNECT,
} = require('../socket-events');

const io = require('socket.io')( socket, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true
  }
});

io.on( CONNECTION, (socket) => {
  socket.emit( CONNECTION, 'online - connection');

  socket.on( LOGIN, data => {
    socket.emit( LOGIN, 'online - login');

    const { id :user_id} = data;
    const { id :socket_id} = socket;

    data.id && console.log('a user ' + data.id + ' connected');
    data.id && userCameOnline({ socket_id, user_id });

  });

  socket.on( DISCONNECT, () => {

    const { id :socket_id } = socket;
    const user_id = getUserIdBySocketId({socket_id});

    console.log('user ' + user_id + ' disconnected');
    user_id && userWentOffline({ socket_id, user_id });

  });

});


module.exports = socket;