var express = require('express');
// var app = express();
// var server = require('http').Server(app);
var router = express.Router();
// var io = require('socket.io').listen(server); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// io.on('connection', function (socket) {

//   // socket.emit('news', { hello: 'world' });

//   socket.on('join', function (data) {
//     console.log(data);
//     socket.emit('messages','Hello from server')
//   });


// });

module.exports = router;
