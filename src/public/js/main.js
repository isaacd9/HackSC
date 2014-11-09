function findMatches(q, cb) {
  $.get('/ajax/search', {'q': q}, function(data) {
      if (typeof data == 'string') {
      	data = JSON.parse(data);
      }
      cb(data.tracks.items);
  });
 }

$(document).ready(function() {
  $('.col-md-8 .search').typeahead(null, {
   name: 'songs',
   displayKey: function (val) {
	  return '<div class="item" data-id="' + val.id  + '">' + val.name + ' - <span class="artist">' + val.artists[0].name + '</span></div>'; 
	},
   source: findMatches,
   templates: {
     empty: [
	'No results found'
     ]
   }
  });

  $('div').on('click', function() {	
     $('.search').val(" ");
  });

});

