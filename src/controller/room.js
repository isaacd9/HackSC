var exports = module.exports = {};
var _ = require('lodash');

var models = require('../models');

exports.get = function (req, res) {
  
  var roomId = _.escape(req.param.id);

  var songs = models.getSongs(req.param.id);
  
  res.render('room', {
      'roomId': req.param.id,
      'song': songs
    });
};
