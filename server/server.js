const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, "../public"); // built-in 'path' module
const port = process.env.PORT || 3000;

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    // socket.emit('newMessage', { // emits an event to a single connection
    //     from: 'Archie.Kesseler@gmail.com',
    //     text: 'Hi from Archie',
    //     createdAt: 123
    // });
    // socket.emit from admin text 'Welcome to the chat app'
    // socket.broadcast.emit New user joined

    socket.emit('newMessage', { // emits an event to a single connection
        from: 'Admin',
        text: 'Welcome to the chat app',
        createdAt: new Date().getTime()
    });

    socket.broadcast.emit('newMessage', {
        from: 'Admin',
        text: 'New user joined',
        createdAt: new Date().getTime()
    });

    socket.on('createMessage', (message) => {
        console.log(`User ${message.from} created a new message: ${message.text}`);
        io.emit('newMessage',{  // io.emits event to every connection, vs socket.emit that does it only for that one
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        });
        // socket.broadcast.emit('newMessage', {  // emits for all but this socket
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // });
    });

    socket.on('disconnect', (socket) => {
        console.log('Disconnected from server');
    });
});

// newMessage event -- server to the client: {from: '', text: '', createdAt: 123}
// createMessage - client to the server: {from: '', text: ''}

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});