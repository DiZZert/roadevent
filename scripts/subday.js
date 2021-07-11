( function( $ ) {

  var ifr = document.getElementById("wheelFrame");

  $(function(){
    $(".twheel_button").on("click", function(){
        ifr.contentWindow.location.replace("sdtype-wheel.html");
    });
  });

  $(function(){
    $(".ewheel_button").on("click", function(){
        ifr.contentWindow.location.replace("effects-wheel.html");
    });
  });

} )( jQuery );
