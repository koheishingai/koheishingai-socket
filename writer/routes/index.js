var io = require("../../node_modules/socket.io").listen(8081);

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};