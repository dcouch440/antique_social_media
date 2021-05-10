const app = require('../../app');
const socket = require('http').createServer(app);

const {
  getUsersFromDB,
  messageWithAttachedUser,
  getRoomUsernames,
  getActiveUserRooms
} = require('./utils');

const {
  CONNECTION,
  JOIN_ROOM,
  USER_JOINED,
  MESSAGE,
  DISCONNECT,
  DISCONNECTION,
  SHOW_ROOM_USER_COUNT
} = require('../socket-events');

const io = require('socket.io')( socket, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true
  }
});

io.on(CONNECTION , async socket => {
  socket.emit(CONNECTION, 'connected to chat');

  socket.on( JOIN_ROOM, async ({ roomId, ...currentUser }) => {
    try {
      console.log('from join room', roomId);

      socket.username = currentUser.username;
      socket.join(roomId);

      const users = await getUsersFromDB(
        await getRoomUsernames({ io, roomId })
      );

      const useThatJoined = await messageWithAttachedUser({
        message: 'Joined The Room', username: currentUser.username
      });

      io.to(roomId).emit( USER_JOINED, { users });
      io.to(roomId).emit( JOIN_ROOM , {
        users,
        roomId,
        ...useThatJoined
      });

      socket.on(MESSAGE, async message => {
        try {
          const messageData = await messageWithAttachedUser({
            message, username: currentUser.username
          });
          await io.to(roomId).emit( 'message', messageData);
        } catch (err) {
          console.error(err);
        }
      });

      socket.on(DISCONNECT, async () => {
        try {
          const users = await getUsersFromDB(
            await getRoomUsernames({ io, roomId })
          );
          const messageData = await messageWithAttachedUser({
            message: `${socket.username} has left the room`,
            username: socket.username
          });
          await io.to(roomId).emit( DISCONNECTION, {
            users,
            ...messageData
          });
          socket.emit( DISCONNECTION, {
            users,
            ...messageData
          });
        } catch (err) {
          console.error(err);
        }
      });

    } catch (err) {
      console.error(err);
    }
  });

  socket.on(SHOW_ROOM_USER_COUNT, async ({ currentUser }) => {
    try {
      const activeRooms = await getActiveUserRooms({ io, user_id: currentUser.id });
      socket.emit(SHOW_ROOM_USER_COUNT, activeRooms);
    } catch (err) {
      console.error(err);
    }
  });

});
module.exports = socket;