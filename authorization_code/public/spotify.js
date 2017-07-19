(function($) {

var $button = $('#search');
var $divResults = $('.results');

$button.on("click", function(e) {

  //e.preventDefault();
  var $inputValue = $('#query').value;  
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
      	query : 'beyonce'
    },
   headers: {
       'Authorization': 'Bearer ' + access_token
   },
   success: function(response) {      
   			console.log('hola');   	
  			$divResults.load('https://api.spotify.com/v1/search?type=artist&query=beyonce',completeFunction);   

  
   }
});
});

  function completeFunction(responseText, textStatus, request) {
    
     $divResults.css('border', '1px solid #000');
   
    console.log(request);
    console.log(JSON.parse(responseText))
    if(textStatus === 'error') {
   	
      $divResults.text('Error del GÚENOOORL ' + request.status + ' ' + request.statusText);
    } 
  }


})(jQuery);