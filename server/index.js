const { Socket } = require('socket.io');

const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: {origin:"*"}
});

io.on('connection', (socket)  => {
    console.log('a new client connected');
    socket.on('message', (message) => {
        console.log(message);
        io.emit('message', `${socket.id.substr(0,2)} said ${message}`);
    });

});

http.listen(8080, () => {
    console.log('listening http://localhost:8080');
});
