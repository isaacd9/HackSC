function findMatches(q, cb) {
  $.get('/ajax/search', {'q': q}, function(data) {
      data = JSON.parse(data);
      cb(data.tracks.items);
  });
 }

$(document).ready(function() {
  $('.col-md-8 .search').typeahead(null, {
   name: 'songs',
   displayKey: 'value',
   source: findMatches,
   templates: {
     empty: [
	'No results found'
     ],
     suggestion: _.template("<%= value %>")
   }
  });
});

