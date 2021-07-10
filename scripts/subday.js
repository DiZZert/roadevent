( function( $ ) {

  var ifr = document.getElementById("wheelFrame");

  $( ".twheel_button input[type=submit]" ).click(function( event ) {
    ifr.contentWindow.location.replace("sdtype-wheel.html");
  });

  $( ".ewheel_button input[type=submit]" ).click(function( event ) {
    ifr.contentWindow.location.replace("effects-wheel.html");
  });

} )( jQuery );
