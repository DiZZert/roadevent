( function( $ ) {

    const $wheel = $( '.wheel .wheel__inner' );
    const $wheelSpinClass = $( '.wheel__inner' );
    const items = 6;
    const diameter = $wheel.height();
    const radius = diameter / 2;
    const angle = 360 / items; //вычисление угла наклона
    const circumference = Math.PI * diameter; //длинна окружности
    const height = (circumference / items) + 25; //высота блока

    function getRandom() {
      return Math.random() * (361 - 0);
    }

    var soundFile = document.createElement("audio");
    soundFile.src = "src/audio/spinSound.mp3";

    var objArray =
    '[{"type": "buff","name": "Тест","pic": "avatars.png","description": "стример проходит тесты от сабов. (пару тестов) (одноразово) (можно использовать для перерыва)"},'+
    '{"type": "debuff","name": "Даунита","pic": "multiday.png","description": "при выпадении стример надевает одну вещь из гардероба на голову. (на весь стрим) при повторном выпадении надевает вторую синергичную вещь"},'+
    '{"type": "buff","name": "Своя игра","pic": "obich.png","description": "своя игра со стримеров и до 8 сабов с войсом/без в дискорде. Несколько заранее заготовленных паков. (пару паков) (одноразово) (можно использовать для перерыва)"},'+
    '{"type": "buff","name": "Монополия","pic": "sgg.png","description": "монополия со стримером и 4 сабами с войсом в дискорде на сайте https://monopoly-one.com/ (пару партий) (одноразово) (можно использовать для перерыва)"},'+
    '{"type": "debuff","name": "Смотровик","pic": "steamrandom.png","description": "следующие 5 видосов на перерыве будут не скипабельными, кроме осуждающего контента. (одноразово)"},{"type": "debuff","name": "Качек","pic": "kachok.png","description": "стример делает физ.сет. (одноразово)"},'+
    '{"type": "debuff","name": "Минимальные настройки","pic": "nazadvpro.png","description": "на 20? минут у стримера включается минимальные настройки + разрешение в игре. (одноразово)"}]';
    ;
    var jsonObject = jQuery.parseJSON(objArray);

      //создание окружности из заданного количесва элементов
      for ( let i = 0; i < items; i++ ) {
          var transform = `rotateX(${ angle * i }deg) translateZ(${ radius }px)`;

          $( '<div>', {class: 'wheel__segment'} )
          .html( `<span> <img src="src/assets/wheel_icons/subday_type/` + jsonObject[i].pic + `" width="60" height="60"> </span>` ).appendTo( $wheel )
          .css( {'transform': transform,'height': height, 'background-image': 'url(src/assets/wheel_img/white_bg.png)'} )
          .click(function() { $("#descriptionName").text(jsonObject[i].name), $("#descriptionText").text(jsonObject[i].description) });
      }

      $wheel.css('transform-origin','50% calc(50% + '+height/2+'px)'); //центр вращения
      $wheel.css('margin-top','-'+height+'px'); /* negative margin here to keep the element into the center */

    $( ".wheel_button input[type=submit]" ).click(function( event ) {

      $("#descriptionName").text('');
      $("#descriptionText").text('');

      soundFile.play();

      $wheelSpinClass.addClass('wheelAnimation');
        var rotateDeg = getRandom();
        $wheelSpinClass.css('transform', 'rotateX(' + rotateDeg + 'deg)');
        setTimeout(function(){
          $wheelSpinClass.removeClass('wheelAnimation');
        }, 9000);
     });

} )( jQuery );
