( function( $ ) {

    var effectsArray =
    '[{"type": "buff","name": "Тест","pic": "test.png","description": "стример проходит тесты от сабов. (1-2 в зависимости от длительности) (одноразово) (можно использовать для перерыва)"},'+
    '{"type": "debuff","name": "Даунита","pic": "daynitakostum.png","description": "при выпадении стример надевает пару вещей из своего гардероба (пипоклавн). (на одну игру)"},'+
    '{"type": "debuff","name": "Танцульки","pic": "dance.png","description": "стример выбирает несколько песен предложенных от сабов и из них выбирается одна наиболее подходящая для танца. (одноразово)"},'+
    '{"type": "buff","name": "Своя игра","pic": "svoyaigra.png","description": "после игр своя игра со стримером и до 8 сабов с войсом/без в дискорда. Выбор из несколько заранее заготовленных паков. Победитель получает 300 рублей на стим кошелек. (один пак) (одноразово)"},'+
    '{"type": "debuff","name": "Экран 180 градусов","pic": "1802.png","description": "на 20 минут у стримера поворачивается экран. (одноразово)"},'+
    '{"type": "debuff","name": "Караокич","pic": "karaoke.png","description": "выбор одной из нескольких песен от сабов и исполнение. (одноразово)"},'+
    '{"type": "buff","name": "Испорченный телефон","pic": "telefon.png","description": "стример играет в испорченный телефон с сабами. (одноразово) (можно использовать для перерыва)"},'+
    '{"type": "debuff","name": "Монеточка","pic": "monetka.png","description": "при выпадении стример кидает монетку. Если падает орел, то добавляет x2 от текущего времени игры(например если осталось 20 минут игры, то умножаешь на 2 и играешь еще дополнительно 20 минут). Если падает решка, то делишь на 2 от текущего времени игры(например если осталось 20 минут игры, то делишь на 2 и играешь только 10 минут)"},'+
    '{"type": "debuff","name": "Черно-белый","pic": "chernbel.png","description": "на 30 минут у стримера включается черно-белый режим на игре. (одноразово)"},'+
    '{"type": "legendary","name": "Легендарный бафф","pic": "sektorCUMgif.gif","description": ""},'+
    '{"type": "debuff","name": "Сэмплы","pic": "sample.png","description": "до конца стрима включаются сэмплы которые могут юзать только сабы. (на одну игру)"},'+
    '{"type": "debuff","name": "Гачи-тайм","pic": "gachitime.png","description": "включается мубот куда сабы закидывают онли гачи треки. (на одну игру)"},'+
    '{"type": "buff","name": "Алкострим","pic": "alco.png","description": "стример делает глотки за каждого саба + к этому при определенных условиях в играх, например смерть. (на весь стрим)"},'+
    '{"type": "debuff","name": "Смотровик","pic": "noskip.png","description": "следующие 5 видосов длительностью не более 10 минут на перерыве будут не скипабельными, кроме осуждающего контента и шизы. За скип +10 минут к некст игре от каждого видоса. (одноразово)"},'+
    '{"type": "debuff","name": "Качек","pic": "kachok.png","description": "стример делает физ.сет. под гачи (одноразово)"},'+
    '{"type": "debuff","name": "НоДез1мин","pic": "plus1min.png","description": "за каждую следующую смерть/фейл в текущей игре стример получает +1 дополнительную минуту к следующей. (на всю игру)"},'+
    '{"type": "buff","name": "Алиас","pic": "alias.png","description": "стример играет в алиас с сабами. (пару партий) (одноразово) (можно использовать для перерыва)"},'+
    '{"type": "debuff","name": "Минимальные настройки","pic": "nazadvpro.png","description": "на 20 минут у стримера включается минимальные настройки (одноразово)"}]';
    ;

    var jsonObject = jQuery.parseJSON(effectsArray);

    function getRandom(max, min) {
      return Math.random() * (max - min);
    }

    function playSound(name) {
      var soundFile = document.createElement("audio");
      soundFile.src = "src/audio/" + name + ".mp3";
      soundFile.play();
    }

    function doWheel(data) {

      const $wheel = $( '.wheel .wheel__inner' );
      const $wheelSpinClass = $( '.wheel__inner' );
      let items = data.length;
      const diameter = $wheel.height();
      const radius = diameter / 2;
      const angle = 360 / items; //вычисление угла наклона
      const circumference = Math.PI * diameter; //длинна окружности
      const height = (circumference / items) + 1; //высота блока

      var spinSounArray = [
        "spinSound",
        "atas",
        "auf1",
        "clubbedtodeath1",
        "fatboy",
        "napas",
        "scooter",
        "scooter2",
        "takeitboy1",
        "turbokiller1",
        "turbokiller2"
      ];

      var legendaryArray = [
        "(бафф сгорает)",
        "поинтовый Аук на следующем стриме",
        "чил Дэй с кс/дотой/настолкой/гвинтом и т.д. на следующем стриме",
        "коллаб с другим стримером на одном из следующих стримов",
        "донатный Аук на следующем стриме"
      ]
        //создание окружности из заданного количесва элементов
        for ( let i = 0; i < jsonObject.length; i++ ) {
            var transform = `rotateX(${ angle * i }deg) translateZ(${ radius }px)`;

            $( '<div>', {class: 'wheel__segment'} )
            .html( `<span> <img src="src/assets/wheel_icons/effects/` + jsonObject[i].pic + `" width="60" height="60"> </span>` ).appendTo( $wheel )
            .css( {'transform': transform,'height': height, 'background-image': 'url(src/assets/wheel_img/'+jsonObject[i].type+'.png)'} )
            .click(function() { bannedBuffs.push(jsonObject[i].name); console.log(bannedBuffs); });
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

          // var roundedPosition = 9;
          // console.log("rotated: " + rotateDeg + " current: " + currentPosition + " roundedPosition: " + roundedPosition);

          $wheelSpinClass.css('transform', 'rotateX(' + rotateDeg + 'deg)');
          setTimeout(function(){
            $wheelSpinClass.removeClass('wheelAnimation');

            $("#descriptionName").text(jsonObject[roundedPosition].name);
            $("#descriptionText").text(jsonObject[roundedPosition].description);

            if(jsonObject[roundedPosition].type == "debuff") {
              playSound("sorry");
            } else if (jsonObject[roundedPosition].type == "legendary") {
              playSound("legendary");

              let legendaryPosition = Math.floor(getRandom(legendaryArray.length, 0))
              $("#descriptionText").text(legendaryArray[legendaryPosition]);

              if (legendaryPosition == 0) {
                console.log("peepoClown");
              }

            } else {
              playSound("what_you_see");
            }

          }, 9300);
       });

    }

    doWheel(jsonObject);

} )( jQuery );
