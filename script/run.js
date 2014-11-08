#! /usr/local/bin/node

var app = require('../src/app');

var server = app.start(app.create(), 8000, 'localhost', function() {
  console.log('Started server on ', server.address().address +  ':' + server.address().port);
});
