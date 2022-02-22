( function( $ ) {

    var effectsArray =
    '[{"type": "buff","name": "Тест","pic": "test.png","description": "стример проходит тесты от сабов. (1-2 в зависимости от длительности)."},'+
    // '{"type": "debuff","name": "Даунита","pic": "daynitakostum.png","description": "при выпадении стример надевает пару вещей из своего гардероба (пипоклавн)."},'+
    '{"type": "debuff","name": "Крутыш","pic": "daynitakostum.png","description": "Всю следующую игру стример сидит в крутых тёмных очках"},'+
    '{"type": "debuff","name": "Танцульки","pic": "dance.png","description": "стример выбирает несколько песен предложенных от сабов и из них выбирается одна наиболее подходящая для танца"},'+
    '{"type": "buff","name": "Своя игра","pic": "svoyaigra.png","description": "после игр своя игра со стримером и до 8 сабов с войсом/без в дискорда. Выбор из несколько заранее заготовленных паков. Победитель получает 300 рублей на стим кошелек. (один пак)"},'+
    '{"type": "debuff","name": "Экран 180 градусов","pic": "1802.png","description": "на 20 минут у стримера поворачивается экран."},'+
    '{"type": "debuff","name": "Караокич","pic": "karaoke.png","description": "выбор одной из нескольких песен от сабов и исполнение."},'+
    '{"type": "buff","name": "Fall Guys: Ultimate Knockout","pic": "fallguysturik1.png","description": "стример играет в Fall Guys со зрителями (лобби до 12 человек). Победитель получает возможность заказать бесплатное кинище"},'+
    '{"type": "debuff","name": "Монеточка","pic": "monetka.png","description": "при выпадении стример кидает монетку. Если падает орел, то добавляет x2 от текущего времени игры(например если осталось 20 минут игры, то умножаешь на 2 и играешь еще дополнительно 20 минут). Если падает решка, то делишь на 2 от текущего времени игры(например если осталось 20 минут игры, то делишь на 2 и играешь только 10 минут)"},'+
    '{"type": "debuff","name": "Черно-белый","pic": "chernbel.png","description": "на 30 минут у стримера включается черно-белый режим на игре."},'+
    '{"type": "legendary","name": "Легендарный бафф","pic": "sektorCUMgif.gif","description": ""},'+
    '{"type": "debuff","name": "Сэмплы","pic": "sample.png","description": "до конца стрима включаются сэмплы которые могут юзать только сабы. (на одну игру)"},'+
    '{"type": "debuff","name": "Гачи-тайм","pic": "gachitime.png","description": "включается мубот куда сабы закидывают онли гачи треки. (на одну игру). Если под игру не подходит, то реролл"},'+
    '{"type": "buff","name": "Алкострим","pic": "alco.png","description": "стример делает глотки за каждого саба + к этому при определенных условиях в играх, например смерть. (на весь стрим)"},'+
    '{"type": "debuff","name": "Смотровик","pic": "noskip.png","description": "следующие 5 видосов длительностью не более 10 минут на перерыве будут не скипабельными, кроме осуждающего контента и шизы. За скип +10 минут к некст игре от каждого видоса."},'+
    '{"type": "debuff","name": "Качек","pic": "kachok.png","description": "стример делает физ.сет. под гачи"},'+
    '{"type": "buff","name": "The Jackbox Party","pic": "jackbox1.png","description": "стример играет в The Jackbox Party Pack 3 со зрителями"},'+
    '{"type": "debuff","name": "НоДез1мин","pic": "plus1min.png","description": "за каждую следующую смерть/фейл в текущей игре стример получает +1 дополнительную минуту к следующей. (на всю игру)"},'+
    '{"type": "debuff","name": "Минимальные настройки","pic": "nazadvpro.png","description": "на 20 минут у стримера включается минимальные настройки."}]';
    ;

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
      "кинодень на следующем стриме",
      "чил дэй с кс/дотой/настолкой/гвинтом и т.д. на следующем стриме",
      // "коллаб с другим стримером на одном из следующих стримов",
      "зацеп стрим по игре, которую выберут зрители",
      // "донатный аук на следующем стриме",
      "шоблинговый/флореновый аук на следующем стриме"
    ];

    var jsonObject = jQuery.parseJSON(effectsArray);

    var deletedEffects = [];

    function getRandom(max, min) {
      return Math.random() * (max - min) + min;
    }

    function playSound(name) {
      var soundFile = document.createElement("audio");
      soundFile.src = "src/audio/" + name + ".mp3";
      soundFile.play();
    }

    function doWheel(data) {

      const $wheel = $( '.wheel .wheel__inner' );
      const $wheelSpinClass = $( '.wheel__inner' );
      let items = jsonObject.length;
      let diameter = $wheel.height();
      let radius = diameter / 2;
      let angle = 360 / items;
      let circumference = Math.PI * diameter;
      let height = (circumference / items) + 1;

      for ( let i = 0; i < jsonObject.length; i++ ) {

          var transform = `rotateX(${ angle * i }deg) translateZ(${ radius }px)`;
          $( '<div>', {class: 'wheel__segment'} )
          .html( `<span> <img src="src/assets/wheel_icons/effects/` + jsonObject[i].pic + `" width="60" height="60"> </span>` ).appendTo( $wheel )
          .css( {'transform': transform,'height': height, 'background-image': 'url(src/assets/wheel_img/'+jsonObject[i].type+'.png)'} )

      }
      $wheel.css('transform-origin','50% calc(50% + '+height/2+'px)');
      $wheel.css('margin-top','-'+height+'px');

      $( ".wheel_button input[type=submit]" ).click(function( event ) {

        $( '.wheel__inner' ).empty()

        let result = [];
        $.grep(jsonObject, function(item) {
          if ($.inArray(item, deletedEffects) == -1) result.push(item);
        });

        jsonObject = result;

        let items = jsonObject.length;
        let diameter = $wheel.height();
        let radius = diameter / 2;
        let angle = 360 / items;
        let circumference = Math.PI * diameter;
        let height = (circumference / items) + 1;

        for ( let i = 0; i < result.length; i++ ) {
            var transform = `rotateX(${ angle * i }deg) translateZ(${ radius }px)`;

            $( '<div>', {class: 'wheel__segment'} )
            .html( `<span> <img src="src/assets/wheel_icons/effects/` + jsonObject[i].pic + `" width="60" height="60"> </span>` ).appendTo( $wheel )
            .css( {'transform': transform,'height': height, 'background-image': 'url(src/assets/wheel_img/'+jsonObject[i].type+'.png)'} )
            .click(function() {

              deletedEffects.push(jsonObject[i]);
              playSound("spank");
              console.log(jsonObject[i]);
            });
        }
        $wheel.css('transform-origin','50% calc(50% + '+height/2+'px)');
        $wheel.css('margin-top','-'+height+'px');

        $wheel.change();

        $("#descriptionName").text('');
        $("#descriptionText").text('');
        $("#descriptionLegendary").text('');

        playSound("spinning/" + spinSounArray[Math.floor(getRandom(spinSounArray.length,0))]);

        $wheelSpinClass.addClass('wheelAnimation');

          var rotateDeg = getRandom(360,angle/2);

          var currentPosition = (360 - (rotateDeg-(angle/2)))/angle;
          // var currentPosition = 9;
          var roundedPosition = Math.floor(currentPosition);

          console.log("rotated: " + rotateDeg + " current: " + currentPosition + " roundedPosition: " + roundedPosition);

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
              $("#descriptionName").text('');

              $("#descriptionLegendary").addClass('spin');

              setTimeout(function(){
                $("#descriptionLegendary").removeClass('spin');
                $("#descriptionLegendary").text(legendaryArray[legendaryPosition]);
              }, 2000);

            } else {
              playSound("what_you_see");
            }

          }, 9300);
       });

    }

    doWheel(jsonObject);

} )( jQuery );
