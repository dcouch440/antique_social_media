const express = require('express');
const logger = require('./lib/logger');
// const PORT = process.env.PORT || 3000;
const router = require('./src/routes');
const configureDatabase = require('./db/db-setup')

configureDatabase()

const app = express();
app.use(express.json());
// app.use(logger.middleWare)
app.use(router);

app.listen(8080, () => console.log('Server is running on 8080'));