var exports = module.exports = {};
var redis = require('redis');

var client = redis.createClient(6379, '127.0.0.1', {});

exports.addToQueue(queue, song) {
 client.set(queue, JSON.strngify(song), redis.print);
}

