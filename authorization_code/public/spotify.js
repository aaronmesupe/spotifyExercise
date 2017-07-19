(function($) {

var $button = $('#search');
var $divResults = $('.results');


$button.on("click", function(e) {

  //e.preventDefault();
  var $inputValue = $('#query').val();
  /*var sArtistToFind = $inputValue.val();*/
  //var sGetArtistsUrl = "https://api.spotify.com/v1/search?type=artist&query=" + sArtistToFind;

   function getHashParams() {
          var hashParams = {};
          var e, r = /([^&;=]+)=?([^&;]*)/g,
              q = window.location.hash.substring(1);
          while ( e = r.exec(q)) {
             hashParams[e[1]] = decodeURIComponent(e[2]);
          }
          return hashParams;
        }

  var params = getHashParams();

  var access_token = params.access_token;

$.ajax({
	metod : 'GET',
   	url: 'https://api.spotify.com/v1/search',
   	dataType: 'json',
   	data: {
     	type: "artist",
      	query : $inputValue
    },
   headers: {
       'Authorization': 'Bearer ' + access_token
   },
   success: function(response) {    
  			$.get('https://api.spotify.com/v1/search?type=artist&query='+$inputValue, completeFunction);   

  
   }
});
});

  function completeFunction(response, textStatus, request) {
    
     $divResults.css('border', '1px solid #000');

     var lengthArtist = response.artists.items.length;

     for (var i = 0; i < lengthArtist; i++){
       $('.listArtistName').append(
              '<li>'+ response.artists.items[i].name + '</li>');
     }

    
    if(textStatus === 'error') {
   	
      $divResults.text('Error ' + request.status + ' ' + request.statusText);
    } 
  }




})(jQuery);