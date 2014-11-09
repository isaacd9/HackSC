function findMatches(q, cb) {
  $.get('/ajax/search', {'q': q}, function(data) {
      cb(data);
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
     suggestion: _.template(Name: "<%= name %>");
   }
  });
});

