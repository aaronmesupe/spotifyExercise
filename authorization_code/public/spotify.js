(function($) {

  var $inputValue = $('.searchArtist');
  console
  var $button = $('.search');
  var $divResults = $('.results');
  var $client_id = 'acc91e66711c4f1c983ca6ffb9d96569';
  var $client_secret = 'b5a571035c7c4db0988293c7a5c853f5';

  $button.on('click', function() {
    //send the request and get the response
    $divResults.get('https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF', completeFunction;
    /*$divResults.get('https://api.spotify.com/v1/search?type=artist&query='+$inputValue, {}, completeFunction);*/
  });
  
  //complete Function
  function completeFunction(responseText, textStatus, request) {
    //add border 
     $divResults.css('border', '1px solid #e8e8e8');
    //check
    console.log(request);
    //check errors
    if(textStatus === 'error') {
      //show me an massage
      $divResults.text('Error del GÚENOOORL ' + request.status + ' ' + request.statusText);
    } 
  }
})(jQuery);