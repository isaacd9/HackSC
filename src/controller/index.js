var room = require('./room');
var ajax = require('./ajax');
var home = require('./home');

module.exports = exports = {};

exports.hi = function(req, res) {
  console.log('A request');
  res.send('it works');
}

module.exports.room = room;
module.exports.ajax = ajax;
module.exports.home = home;
