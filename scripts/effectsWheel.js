( function( $ ) {

    const $wheel = $( '.wheel .wheel__inner' );
    const $wheelSpinClass = $( '.wheel__inner' );
    const items = 18;
    const diameter = $wheel.height();
    const radius = diameter / 2;
    const angle = 360 / items; //вычисление угла наклона
    const circumference = Math.PI * diameter; //длинна окружности
    const height = (circumference / items) + 1; //высота блока

    function getRandom() {
      return Math.random() * (361 - 0);
    }

    var soundFile = document.createElement("audio");
    soundFile.src = "src/audio/spinSound.mp3";

    var soundSorry = document.createElement("audio");
    soundSorry.src = "src/audio/sorry.mp3";

    var likeThat = document.createElement("audio");
    likeThat.src = "src/audio/like_that.mp3";

    var objArray =
    '[{"type": "buff","name": "Тест","pic": "test.png","description": "стример проходит тесты от сабов. (пару тестов) (одноразово) (можно использовать для перерыва)"},'+
    '{"type": "debuff","name": "Даунита","pic": "daynitakostum.png","description": "при выпадении стример надевает одну вещь из гардероба на голову. (на весь стрим) при повторном выпадении надевает вторую синергичную вещь"},'+
    '{"type": "debuff","name": "Танцульки","pic": "dance.png","description": "стример выбирает несколько песен предложенных от сабов и из них выбирается одна наиболее подходящая для танца. (одноразово)"},'+
    '{"type": "buff","name": "Своя игра","pic": "svoyaigra.png","description": "своя игра со стримеров и до 8 сабов с войсом/без в дискорде. Несколько заранее заготовленных паков. (пару паков) (одноразово) (можно использовать для перерыва)"},'+
    '{"type": "debuff","name": "Экран 180 градусов","pic": "1802.png","description": "на 20? минут у стримера поворачивается экран. (одноразово) (пруфануть можно в определенной сцене)"},'+
    '{"type": "debuff","name": "Караокич","pic": "karaoke.png","description": "выбирает несколько песен от сабов и исполняет. (одноразово)"},'+
    '{"type": "buff","name": "Испорченный телефон","pic": "telefon.png","description": "стример играет в испорченный телефон с сабами. (одноразово) (можно использовать для перерыва)"},'+
    '{"type": "debuff","name": "Монеточка","pic": "monetka.png","description": "при выпадении стример кидает монетку. Если падает орел, то добавляет x2 от текущего времени игры(например если осталось 20 минут игры, то умножаешь на 2 и играешь еще дополнительно 20 минут). Если падает решка, то делишь на 2 от текущего времени игры(например если осталось 20 минут игры, то делишь на 2 и играешь только 10 минут)"},'+
    '{"type": "debuff","name": "Черно-белый","pic": "chernbel.png","description": "на 20? минут у стримера включается черно-белый режим на игре. (одноразово) (пруфануть можно в определенной сцене)"},'+
    '{"type": "buff","name": "Монополия","pic": "monopoly.png","description": "монополия со стримером и 4 сабами с войсом в дискорде на сайте https://monopoly-one.com/ (пару партий) (одноразово) (можно использовать для перерыва)"},'+
    '{"type": "debuff","name": "Сэмплы","pic": "sample.png","description": "до конца стрима включаются сэмплы которые могут юзать только сабы. (на весь стрим) "},'+
    '{"type": "debuff","name": "Гачи-тайм","pic": "gachitime.png","description": "включается мубот куда сабы закидывают онли гачи треки. (на пару часов) Минимальные настройки(дебафф) - на 20? минут у стримера включается минимальные настройки + разрешение в игре. (одноразово)"},'+
    '{"type": "buff","name": "Алкострим","pic": "alco.png","description": "стример делает глотки за каждого подписочного саба + к этому при определенных условиях в играх, например смерть. (на весь стрим)"},'+
    '{"type": "debuff","name": "Смотровик","pic": "noskip.png","description": "следующие 5 видосов на перерыве будут не скипабельными, кроме осуждающего контента. (одноразово)"},{"type": "debuff","name": "Качек","pic": "kachok.png","description": "стример делает физ.сет. (одноразово)"},'+
    '{"type": "debuff","name": "НоДез1мин","pic": "plus1min.png","description": "за каждую следующую смерть в текущей игре стример получает +1 дополнительную минуту к следующей. (на всю игру)"},'+
    '{"type": "buff","name": "Алиас","pic": "alias.png","description": "стример играет в алиас с сабами. (пару партий) (одноразово) (можно использовать для перерыва)"},'+
    '{"type": "debuff","name": "Минимальные настройки","pic": "nazadvpro.png","description": "на 20? минут у стримера включается минимальные настройки + разрешение в игре. (одноразово)"}]';
    ;
    var jsonObject = jQuery.parseJSON(objArray);

      //создание окружности из заданного количесва элементов
      for ( let i = 0; i < items; i++ ) {
          var transform = `rotateX(${ angle * i }deg) translateZ(${ radius }px)`;

          $( '<div>', {class: 'wheel__segment'} )
          .html( `<span> <img src="src/assets/wheel_icons/effects/` + jsonObject[i].pic + `" width="60" height="60"> </span>` ).appendTo( $wheel )
          .css( {'transform': transform,'height': height, 'background-image': 'url(src/assets/wheel_img/'+jsonObject[i].type+'.png)'} )
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

        var currentPosition = (360 - (rotateDeg-(angle/2)))/angle;
        var roundedPosition = Math.floor(currentPosition);

        console.log("rotate deg: " + rotateDeg + " current pos: " + currentPosition + " " + jsonObject[roundedPosition].name);

        $wheelSpinClass.css('transform', 'rotateX(' + rotateDeg + 'deg)');
        setTimeout(function(){
          $wheelSpinClass.removeClass('wheelAnimation');

          if(jsonObject[roundedPosition].type == "debuff") {
              soundSorry.play();
          } else {
            likeThat.play();
          }

        }, 9200);
     });

} )( jQuery );
