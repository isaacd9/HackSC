var exports = module.exports = {};
var _ = require('lodash');

var models = require('../models');

exports.get = function (req, res) {
  
  var roomId = _.escape(req.params.id);

  models.room.getSongs(roomId, function(err, songs) {
  
  if (songs.length == 0) {
    res.send('No songs in queue for this room');
    return;
  }  

  res.render('room', {
      'roomId': req.params.id,
      'songs': songs
    });
  });
};
