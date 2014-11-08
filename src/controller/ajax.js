var request = require('request');
var _ = require('lodash');

module.exports = exports = {};

exports.search = function(req, res) {
  var query = _.escape(req.query.q);

  request
    .get("http://api.spotify.com/v1/search?type=track&q=" + query, function(error, response, body) {
      if (error) {
        res.status(500).send(error);
      }
      res.status(200).send(body);
      });
};
