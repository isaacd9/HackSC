var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var controllers = require('./controller');

var app = express();

module.exports = exports = {};

function configureApp (app) {
//  app.use(bodyParser());
  app.use("/public", express.static(__dirname + '/public'));
  app.engine('jade', require('jade').__express);
  app.set('view engine', 'jade');
  app.set('views', path.join(__dirname + '/view'));
  
  app.use(function(req, res, next) {
   req.spotify = {
      clientId : "85308f706c9d47b787353e1a82e07cbc",
      secret : "2bc786ec014b428e8389d3a41ebb738d"
    };
  next();
  });
}

function drawRoutes (app) {
 // app.get('/', controllers.hi);
  app.get('/', controllers.home.get);
  app.get('/ajax/search', controllers.ajax.search);
  app.get('/ajax/queue', controllers.ajax.selectSong);
  app.get('/room/:id', controllers.room.get);

  app.post('/', controllers.home.post);
}

exports.create = function() {
  var app = express();
  configureApp(app);
  drawRoutes(app);
  return app;
};

exports.start = function(app, address, port, callback) {
 return app.listen(address, port, callback);
}
