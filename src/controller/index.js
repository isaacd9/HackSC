module.exports = exports = {};

exports.hi = function(req, res) {
  console.log('A request');
  res.send('it works');
}
