( function( $ ) {

    const $wheel = $( '.wheel .wheel__inner' );
    const $wheelSpinClass = $( '.wheel__inner' );
    const items = 18;
    const diameter = $wheel.height();
    const radius = diameter / 2;
    const angle = 360 / items; //вычисление угла наклона
    const circumference = Math.PI * diameter; //длинна окружности
    const height = (circumference / items) + 1; //высота блока

    function getRandom(max, min) {
      return Math.random() * (max - min);
    }

    var spinSounArray = ["spinSound", "atas", "auf1", "clubbedtodeath1", "fatboy", "napas", "scooter", "scooter2", "takeitboy1", "turbokiller1", "turbokiller2"];

    function playSound(name) {
      var soundFile = document.createElement("audio");
      soundFile.src = "src/audio/" + name + ".mp3";
      soundFile.play();
    }

    var effectsArray = $.ajax({
      url: '../src/data/effects.txt',
      dataType: 'text',

      success: function (data) {
        console.log(data);
      }
    });

    console.log(effectsArray);

    // var effectsArray =
    //
    // ;
    var jsonObject = jQuery.parseJSON(effectsArray);

      //создание окружности из заданного количесва элементов
      for ( let i = 0; i < items; i++ ) {
          var transform = `rotateX(${ angle * i }deg) translateZ(${ radius }px)`;

          $( '<div>', {class: 'wheel__segment'} )
          .html( `<span> <img src="src/assets/wheel_icons/effects/` + jsonObject[i].pic + `" width="60" height="60"> </span>` ).appendTo( $wheel )
          .css( {'transform': transform,'height': height, 'background-image': 'url(src/assets/wheel_img/'+jsonObject[i].type+'.png)'} )
          // .click(function() { $("#descriptionName").text(jsonObject[i].name), $("#descriptionText").text(jsonObject[i].description) });
          // .mousedown(function(event) {
          //   if(event.button == 1){
          //     console.log(jsonObject[i].name);
          //
          //     $wheel.toggle().toggle();
          //   }
          // });

      }



      $wheel.css('transform-origin','50% calc(50% + '+height/2+'px)'); //центр вращения
      $wheel.css('margin-top','-'+height+'px'); /* negative margin here to keep the element into the center */

    $( ".wheel_button input[type=submit]" ).click(function( event ) {

      $("#descriptionName").text('');
      $("#descriptionText").text('');

      playSound("spinning/" + spinSounArray[Math.floor(getRandom(spinSounArray.length,0))]);

      $wheelSpinClass.addClass('wheelAnimation');

        var rotateDeg = getRandom(360,0);

        var currentPosition = (360 - (rotateDeg-(angle/2)))/angle;
        var roundedPosition = Math.floor(currentPosition);
        console.log("rotated: " + rotateDeg + " current: " + currentPosition + " roundedPosition: " + roundedPosition);

        $wheelSpinClass.css('transform', 'rotateX(' + rotateDeg + 'deg)');
        setTimeout(function(){
          $wheelSpinClass.removeClass('wheelAnimation');

          if(jsonObject[roundedPosition].type == "debuff") {
            playSound("sorry");
          } else if (jsonObject[roundedPosition].type == "legendary") {
            playSound("legendary");
          } else {
            playSound("what_you_see");
          }

           $("#descriptionName").text(jsonObject[roundedPosition].name);
           $("#descriptionText").text(jsonObject[roundedPosition].description);

        }, 9300);
     });

} )( jQuery );
