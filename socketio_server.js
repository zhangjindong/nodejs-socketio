var io = require('socket.io')();
io.of('/chat').on('connection', function(socket) {
    socket.emit('news', {
        hello: 'world ,is mi my name is zhangjindong'
    });
    socket.on('my other event', function(data) {
        console.log(data);
    });
});
exports.listen = function(_server) {
    return io.listen(_server);
};