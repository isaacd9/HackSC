var request = require('request');
var _ = require('lodash');
var models = require('../models');

module.exports = exports = {};

exports.search = function(req, res) {
  var query = _.escape(req.query.q);

  request
    .get("http://api.spotify.com/v1/search?type=track&limit=10&q=" + query, function(error, response, body) {
      if (error || body.error) {
        res.status(500).send(error);
      }

      res.status(200).send(body);
      });
};

exports.selectSong = function(req, res) {
  var songId = _.escape(req.query.songId);
  
  console.log(req.query);
  request
    .get("http://api.spotify.com/v1/tracks/" + songId, function(error, response, body) {
     if (error || body.error || !req.query.queueId) {
      res.status(500).send(error);
      return;
     }

     console.log(body);
     models.song.addToQueue(req.query.queueId, body);
     res.status(200).send({
        message: "success"
      });
  });
}
