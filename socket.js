const app = require('./app');
const socket = require('http').createServer(app);
const store = require('./src/socket-reducer/store');
const {
  userAdded,
  userRemoved,
  getUserId

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

    const { id :socket_id } = socket;
    const user_id = getUserId({socket_id});

    {
      console.log('user ' + user_id + ' disconnected');

      user_id && userRemoved({ socket_id, user_id });
    }

  });

});


module.exports = socket;