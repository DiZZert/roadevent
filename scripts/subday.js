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

  // $( ".twheel_button area[shape=rect]" ).click(function( event ) {
  //   ifr.contentWindow.location.replace("sdtype-wheel.html");
  // });
  //
  // $( ".ewheel_button input[type=submit]" ).click(function( event ) {
  //   ifr.contentWindow.location.replace("effects-wheel.html");
  // });

  function frameType(){
    console.log("type");
  }

} )( jQuery );
