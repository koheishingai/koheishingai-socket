var io = require("../../node_modules/socket.io").listen(8082);

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};