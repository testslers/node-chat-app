let socket = io();
socket.on('connect', function () {
    console.log('Connected to server');

    // socket.emit('createMessage', {
    //     from: "some.user@gmail.com",
    //     text: "hello to you, too"
    // })
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
   console.log('You have a new message', message);
});
