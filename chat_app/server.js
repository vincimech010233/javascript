const path = require('path');
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

function createServer() {
  const app = express();
  const server = http.createServer(app);
  const io = new Server(server);

  app.use(express.static(path.join(__dirname, 'public')));

  io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

  return { app, io, server };
}

if (require.main === module) {
  const { server } = createServer();
  server.listen(3000, '127.0.0.1', () => {
    console.log('Chat server running at http://127.0.0.1:3000');
  });
}

module.exports = { createServer };
