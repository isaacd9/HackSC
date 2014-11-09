var exports = module.exports = {};
var crypto = require('crypto');
var _ = require('lodash');

exports.get = function(req, res) {
  res.render('home');
};

exports.post = function(req, res) {
  if (!_.has(req.body, 'submit')) {
    res.send(500, 'Internal server error');
    return;
  }

  var hash = crypto.createHash('sha1');

  hash.update(Date.now().toString());

  var digest = hash.digest("hex").toString();

  res.redirect('/room/' + digest.substr(0, 6));
};

