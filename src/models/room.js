var exports = module.exports = {};
var redis = require('redis');
var _ = require('lodash');
var he = require('he');

var client = redis.createClient(6379, '127.0.0.1', {});

exports.getSongs = function(room, cb) {
  client.lrange(room, 0, 14, function (error, songs) {
    var parsedSongs = [];

    _.each(songs, function(song) {
      parsedJson = (JSON.parse(he.unescape(he.decode(song))));
      parsedJson = parsedJson.replace(/\n/g, "");
      function millisToMinutes(millis) {
        var minutes = Math.floor(millis/60000);
        var seconds = ((millis%60000)/1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
      }
      parsedJson.duration_ms = millisToMinutes(parsedJson.duration_ms);
      parsedSongs.push(JSON.parse(parsedJson));
    });

    cb(error, parsedSongs);
  });
};
