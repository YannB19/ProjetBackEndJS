const dotenv = require('dotenv');
const express = require('express');

const singerRoute = require('./routes/singer.route');
const docRoute = require('./routes/swagger.route');

dotenv.config();

const server = express();
server.use(express.json());
server.set('json spaces', 2);


server.use('/api', docRoute);
server.use('/api/singers', singerRoute);

const port = Number(process.env.PORT || 8081);
server.listen(port);


module.exports = server;

//const port = process.env.PORT;
//console.log(`Your port is ${port}`);