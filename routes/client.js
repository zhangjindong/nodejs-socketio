var express = require('express');
var router = express.Router();
// var server = global.server;

// var io = require('socket.io').listen(server);
//  GET home page. 
router.get('/', function(req, res, next) {
    res.render('client/index', {
        title: ''
    });
});

// io.sockets.on('connection', function(socket) {
//     socket.emit('news', {
//         hello: 'world'
//     });
//     socket.on('my other event', function(data) {
//         console.log(data);
//     });
// });
module.exports = router;