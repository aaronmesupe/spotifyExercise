(function($) {

var $button = $('#search');
var $divResults = $('.results');


$button.on("click", function(e) {
  $('.row').empty();
  //e.preventDefault();
  var $inputValue = ($('#query').val()).toString();
  $inputValue = $inputValue.replace(" ", "+");

  //$inputValue = $inputValue.toString();
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

     //var artist = response.artists.items;
     console.log(response.artists.items);
     var artistList = response.artists.items;


     artistList.forEach ( function (artist){
      if (artist.images.length !== 0){
          $('.row').append(
          '<div class="col-4" style="margin-left:15px"><img style="width:200px;" src=' + artist.images[0].url + '> </div>'
              );
      }

    });
    

    
    if(textStatus === 'error') {
   	
      $divResults.text('Error ' + request.status + ' ' + request.statusText);
    } 
  }




})(jQuery);