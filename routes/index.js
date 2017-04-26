var express = require('express');
var server = require('http').Server(app);
var router = express.Router();
var io = require('socket.io')(server); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });

  socket.on('my other event', function (data) {
    console.log(data);
  });

  
});

module.exports = router;
