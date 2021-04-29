const app = require('./app');
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
  }
});

const users = {};

io.on('connection', () => {console.log('connected')});

io.on('connection', (socket) => {

  socket.on('login', (data) => {
    console.log('a user ' + data.id + ' connected');
    users[socket.id] = data.id;
  });

  socket.on('disconnect', function(){
    console.log('user ' + users[socket.id] + ' disconnected');
    delete users[socket.id];
  });

});

module.exports = server