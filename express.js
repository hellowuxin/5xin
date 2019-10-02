const express = require('express'); // 引入express模块

const app = express();
app.use(express.static('.'));
const server = require('http').createServer(app);// http

server.listen(8000);
