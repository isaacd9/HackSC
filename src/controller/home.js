var exports = module.exports = {};
var crypo = require('crypto');

exports.get = function(req, res) {
  res.render('home');
};

exports.post = function(req, res) {
 if (!req.body.submit) {
    return;
  }

 var hash = crypto.createHash('sha1');
 hash.update(Date.now());
 var digest = hash.digest("base64");

 res.redirect('/room/' + digest.substr(6));
};

