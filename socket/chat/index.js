const app = require('../../app');
const socket = require('http').createServer(app);
const { getUsers, messageWithAttachedUser } = require('./utils');

const io = require('socket.io')( socket, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
  }
});

io.on('connection', (socket) => {
  socket.emit('connection', 'connected to chat');

  socket.on('join-room', async ({roomId, ...currentUser}) => {

    console.log('from join room' , roomId);

    socket.username = currentUser.username;
    socket.join(roomId);
    const USERS = [];

    const clients = io.sockets.adapter.rooms.get(roomId);

    clients.forEach( clientId => {
      const {username} = io.sockets.sockets.get(clientId);
      USERS.push(username);
    });

    io.to(roomId).emit( 'user-joined' , {users: await getUsers(USERS) });

    io.to(roomId).emit( 'join-room' , {
      users: await getUsers(USERS),
      roomId,
      message: await messageWithAttachedUser({message: "Joined The Room", username: currentUser.username })
    });


    socket.on( 'message' , async message => {
      io.to(roomId).emit( 'message', {message: await messageWithAttachedUser({message, username: currentUser.username })});
    });

    socket.on('disconnect', async () => {

      USERS.filter(user => user === socket.username);

      io.to(roomId).emit( 'disconnection' , {
        users: await getUsers(USERS),
        message: await messageWithAttachedUser({
          message: `${socket.username} has left the room`,
          username: socket.username
        }),
      });

    });

  });

});

module.exports = socket;