const app = require('../../app');
const socket = require('http').createServer(app);
const { getUsers } = require('./utils');

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
    socket.username = currentUser.username;
    socket.join(roomId);
    const USERS = [];

    const clients = io.sockets.adapter.rooms.get(roomId);

    clients.forEach( clientId => {
      const {username} = io.sockets.sockets.get(clientId);
      USERS.push(username);
    });


    io.to(roomId).emit( 'user-joined' , {users: await getUsers(USERS) });
    socket.emit( 'join-room' , {users: await getUsers(USERS), roomId });

    console.log(await getUsers(USERS));

    socket.on( 'message' , message => {
      io.to(roomId).emit( 'message', {
        ...message,
        username: currentUser.username,
      });
    });

    socket.on('disconnect', async () => {

      USERS.filter(user => user === socket.username);
      io.to(roomId).emit( 'disconnection' , {
        users: await getUsers(USERS),
        message: {
          message: `${socket.username} has left the room`,
          username: 'Status'
        },
      });

    });

  });

});

module.exports = socket;