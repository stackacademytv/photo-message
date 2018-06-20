const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const fs = require('fs')

// Create HTTP Server
const app = express()
const server = http.Server(app);

// Create Socket Server
const io = socketio(server);

// Get messages from store
const messagesData = fs.readFileSync(`${__dirname}/db.json`).toString();
const messages = messagesData ? JSON.parse(messagesData) : [];

// Serve "app"
app.use(express.static(`${__dirname}/../app`));

// Serve node modules
app.use('/modules', express.static(`${__dirname}/../node_modules`))

io.on('connection', (socket) => {
  
  // Send all messages to th connected client
  socket.emit('all_messages', messages);

  // Listen for new messages
  socket.on('new_message', (message) => {

    // Add to messages
    messages.unshift(message);

    // Broadcast to all other clients
    socket.broadcast.emit('new_message', message);

    // Persist
    fs.writeFileSync(`${__dirname}/db.json`, JSON.stringify(messages));

  });
  
});

// Start server
server.listen( 8888, () => console.log('App listening on port 8888'))
