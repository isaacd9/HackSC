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
	  return '<div id="hi" class="item" data-id="' + val.id  + '">' + val.name + ' - <span class="artist">' + val.artists[0].name + '</span></div>'; 
	},
   source: findMatches,
   templates: {
     empty: [
	'No results found'
     ]
   }
  });
  
  var playing = false;

  $('iframe').on('mousedown', function() {
    console.log('handled click event');
    playing = !playing;

    $('ul li').first().css('background-color', 'red');
    //$.get('/ajax/pop', window.location.pathname.substring(-6));
    
  });

});

