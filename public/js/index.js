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

socket.on('newMessage', function (message) {
    console.log('You have a new message', message);
    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);
    jQuery('#messages').append(li);
});

/*
socket.emit('createMessage', {
    from: 'Archie',
    text: 'Hi'
}, function (data) {
    console.log('Got it', data);
});
*/

jQuery('#message-form').on('submit', function(event) {
    event.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function() {

    });
});
