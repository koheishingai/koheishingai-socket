var fs = require("fs");
var io = require("../../node_modules/socket.io").listen(8080);
var getLangJson;
var PATH_BEF = "/usr/share/nginx/html/";
var PATH_AFT = "/lang.json";

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

io.sockets.on("connection", function (socket) {
  getLangJson = function(path){
    fs.readFile(PATH_BEF+path+PATH_AFT, "utf8", function(err, val){
      socket.emit('readLang', val);
    });
  }
  socket.on("readLang", function(path){
    var path_t = path.split('/').join('');
    getLangJson(path_t);
  });
  // For Dev
  socket.on("readFolder", function(){
     
  });
});
