(function($) {


  var $inputValue = $('.searchArtist'); 
  var $button = $('.search');
  var $divResults = $('.results');


  $button.on('click', function() {
    $divResults.load('https://api.spotify.com/v1/search?type=artist&query=0TnOYISbd1XYRBk9myaseg', completeFunction);
    /*$divResults.get('https://api.spotify.com/v1/search?type=artist&query='+$inputValue, {}, completeFunction);*/
  });
  

  function completeFunction(responseText, textStatus, request) {
    
     $divResults.css('border', '1px solid #000');
   
    console.log(request);
   
    if(textStatus === 'error') {
   
      $divResults.text('Error del GÚENOOORL ' + request.status + ' ' + request.statusText);
    } 
  }
})(jQuery);