const express = require('express');
const controller = require('./controller');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();

server.use(cors());
server.use(bodyParser.json());
server.get('/allCookies', controller.getCookies);
server.post('/', controller.createCookie);
server.delete('/:cookie', controller.deleteCookie);
server.put('/:cookie', controller.updateCookie);

server.listen(4000, () => { console.log(`Listening on port: 4000`) });