const app = require('../../app');
const socket = require('http').createServer(app);
const { getUsers, messageWithAttachedUser } = require('./utils');
const {
  CONNECTION,
  JOIN_ROOM,
  USER_JOINED,
  MESSAGE,
  DISCONNECT,
  DISCONNECTION,
} = require('../socket-events');

const io = require('socket.io')( socket, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true
  }
});

io.on( CONNECTION , socket => {
  socket.emit( CONNECTION, 'connected to chat');

  socket.on( JOIN_ROOM, async ({ roomId, ...currentUser }) => {

    console.log('from join room', roomId);

    socket.username = currentUser.username;
    socket.join(roomId);
    const USERS = [];

    const clients = io.sockets.adapter.rooms.get(roomId);

    clients.forEach( clientId => {
      const { username } = io.sockets.sockets.get(clientId);
      USERS.push(username);
    });

    io.to(roomId).emit( USER_JOINED, { users: await getUsers(USERS) });

    io.to(roomId).emit( JOIN_ROOM , {
      users: await getUsers(USERS),
      roomId,
      ...await messageWithAttachedUser({
        message: 'Joined The Room', username: currentUser.username
      })
    });

    socket.on( MESSAGE, async message => {
      io.to(roomId).emit( 'message', {
        ...await messageWithAttachedUser({
          message, username: currentUser.username }
        ) }
      );
    });

    socket.on( DISCONNECT, async () => {

      USERS.filter(user => user === socket.username);

      io.to(roomId).emit( DISCONNECTION, {
        users: await getUsers(USERS),
        ...await messageWithAttachedUser({
          message: `${socket.username} has left the room`,
          username: socket.username
        }),
      });

    });

  });

});

module.exports = socket;