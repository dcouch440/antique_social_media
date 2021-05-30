const app = require('./app');

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => console.log(
  'Updated : Server listening at port %d', PORT
));

module.exports = server;