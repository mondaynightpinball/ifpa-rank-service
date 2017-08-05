'use strict';

const debug = require('debug')('peoplelookup:server');
const app = require('./main.js');

require('dotenv').load();

const PORT = process.env.PORT;

const server = module.exports = app.listen(PORT, () => {
  debug('server up:', PORT);
});

server.running = true;
server.PORT = PORT;
