var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var controllers = require('./controller');

var app = express();

module.exports = exports = {};

function configureApp (app) {
//  app.use(bodyParser());
  app.use(express.static(__dirname + '/public'));
  app.set('views', path.join(__dirname + '/public'));
  app.engine('jade', require('jade').__express);
}

function drawRoutes (app) {
  app.get('/', controllers.hi);
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
