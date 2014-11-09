var exports = module.exports = {};
var _ = require('lodash');

var models = require('../models');

exports.get = function (req, res) {
  
  var roomId = _.escape(req.params.id);

  models.room.getSongs(roomId, function(err, songs) {
  
  var songIds = _.pluck(songs, 'id');
  var songIdsString = "";
  
  _.eachRight(songIds, function(id) {
    songIdsString += ':';
    songIdsString += id;
  });
  
  console.log(songIdsString);

  res.render('room', {
      'roomId': req.params.id,
      'songs': songs,
      'ids': songIdsString
    });
  });
};
