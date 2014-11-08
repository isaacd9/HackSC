var exports = module.exports = {};

exports.get = function (req, res) {
  res.render('room', function(err, html) {
    res.end(html);
  });
};
