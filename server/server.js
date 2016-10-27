
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);
console.log('server started');

io = io.listen(server);

io.on('connection', function (socket) {

 console.log('connected to', socket.id);

    
    socket.on('new-message', function (data) {

        console.log('message Receive',data);

        io.sockets.emit('append-message', data);

    });


});