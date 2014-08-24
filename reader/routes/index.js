var io = require("../../node_modules/socket.io").listen(8080);

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

io.sockets.on("connection", function (socket) {
  socket.on("read", function(url){
    console.log(url);
  });
});