var exports = module.exports = {};
var redis = require('redis');

var client = redis.createClient(6379, '127.0.0.1', {});

exports.addToQueue = function(queue, song) {
 client.rpush(queue, JSON.stringify(song), redis.print);
}

