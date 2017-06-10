var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);
io = io.listen(server);
io.on('connection', function (socket) {   
    socket.on('new-message', function (data) {
        console.log('message Receive',data);
        io.sockets.emit('append-message', data);
    });


});