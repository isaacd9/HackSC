var room = require('./room');
var ajax = require('./ajax');

module.exports = exports = {};

exports.hi = function(req, res) {
  console.log('A request');
  res.send('it works');
}

module.exports.room = room;
module.exports.ajax = ajax;
