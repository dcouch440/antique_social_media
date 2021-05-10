const app = require('../../app');
const socket = require('http').createServer(app);
const { getUsers, messageWithAttachedUser } = require('./utils');

const {
  userJoinedRoom,
  userLeftRoom,
  getUsersInRoom,
  roomCreatedIfNoExist
} = require('./room-state/actions');

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
    try {

      console.log('from join room', roomId);

      socket.username = currentUser.username;
      socket.join(roomId);

      roomCreatedIfNoExist(roomId);
      userJoinedRoom({ username: currentUser.username, roomId });

      const users = await getUsers(getUsersInRoom(roomId));
      const useThatJoined = await messageWithAttachedUser({
        message: 'Joined The Room', username: currentUser.username
      });

      io.to(roomId).emit( USER_JOINED, { users });

      io.to(roomId).emit( JOIN_ROOM , {
        users,
        roomId,
        ...useThatJoined
      });

      socket.on( MESSAGE, async message => {
        const messageData = await messageWithAttachedUser({
          message, username: currentUser.username
        });

        io.to(roomId).emit( 'message', messageData);
      });

      socket.on( DISCONNECT, async () => {
        userLeftRoom({ username: socket.username, roomId });
        const users = await getUsers(getUsersInRoom(roomId));
        const messageData = await messageWithAttachedUser({
          message: `${socket.username} has left the room`,
          username: socket.username
        });

        io.to(roomId).emit( DISCONNECTION, {
          users,
          ...messageData
        });
        socket.emit( DISCONNECTION, {
          users,
          ...messageData
        });
      });

    } catch (err) {
      console.error(err);
    }
  });
});

module.exports = socket;