( function( $ ) {

    var effectsArray =
    '[{"type": "buff","name": "empty","pic": "test.png","description": "при каждом твоем крике - сабка"},'+
    '{"type": "buff","name": "empty","pic": "test.png","description": "семплы со скримерами"},'+
    '{"type": "buff","name": "Ну нахер","pic": "test.png","description": "повышение градуса самого хоррора (от пусеченых до самых страшных)"},'+
    '{"type": "buff","name": "empty","pic": "test.png","description": "плюс игра, минус игра"},'+
    '{"type": "buff","name": "empty","pic": "test.png","description": "выключить свет"},'+
    '{"type": "buff","name": "Пьянка с ебаками","pic": "test.png","description": "алко обсёр (додумать) выпивать за каждый напуг"},'+
    '{"type": "buff","name": "empty","pic": "test.png","description": "сидеть какое то время с фанариком у подбородка (додумать мб?)"},'+
    '{"type": "buff","name": "empty","pic": "test.png","description": "Пульсометр (превысил какое значение че то делаешь) - крутится колесо, но это может произойти только один раз за стрим."},'+
    '{"type": "buff","name": "empty","pic": "test.png","description": "кто больше всего раз крикнет или явно испугается дарит 50 сабок на канал победителя (в случае если коллаб ивент)"},'+
    '{"type": "buff","name": "Не хочу умирац","pic": "test.png","description": "Следующая игра ролится из категории супер страшные"},'+
    '{"type": "buff","name": "Outlast","pic": "test.png","description": "Временно накатить на вебку фильтр ночного виденья"},'+
    '{"type": "buff","name": "empty","pic": "test.png","description": "страшные алерты"},'+
    '{"type": "buff","name": "empty","pic": "test.png","description": "прикол с громкостью (?)"},'+
    '{"type": "buff","name": "Коричные паруса","pic": "test.png","description": "пойти сменить труханы и показать на стриме сами труханы без себя"},'+
    '{"type": "buff","name": "200 IQ","pic": "test.png","description": "если не можешь пройти загадку за 5 мин, то пьешь че-то или что-то еще"},'+
    '{"type": "buff","name": "empty","pic": "test.png","description": "Что-то за геймоверы"},'+
    '{"type": "buff","name": "empty","pic": "test.png","description": "Переход через категорию. Если и вы и так на максимальной категории, то воля случая. Орел - плюс игры; Решка - повезло."},'+
    '{"type": "buff","name": "Повезло повезло","pic": "test.png","description": "Понижение категории"},'+
    '{"type": "buff","name": "empty","pic": "test.png","description": "следующая игра будет на текущей категории"},'+
    '{"type": "buff","name": "Есть два стула","pic": "test.png","description": "Стримерский стул меняется на табуретку. Если стример упал с табуретки от испуга - что-то?"},'+
    '{"type": "buff","name": "Киновечер","pic": "test.png","description": "с фильмом ужасов (выбор из списка, заказанного зрителями)"},'+
    '{"type": "legendary","name": "empty","pic": "test.png","description": ""},'+
    '{"type": "debuff","name": "empty","pic": "test.png","description": "Следующие 3 барабана будут по фикс прайсу"}]';
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

    var horrorsCategoryArray = [
      "пусечная",
      "стремач",
      "вырубай",
      "ну нахуй",
      "РЕЗНЯ"
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

              let legendaryPosition = Math.floor(getRandom(horrorsCategoryArray.length, 0))
              $("#descriptionName").text('');

              $("#descriptionLegendary").addClass('spin');

              setTimeout(function(){
                $("#descriptionLegendary").removeClass('spin');
                $("#descriptionLegendary").text(horrorsCategoryArray[legendaryPosition]);
              }, 2000);

            } else {
              playSound("what_you_see");
            }

          }, 9300);
       });

    }

    doWheel(jsonObject);

} )( jQuery );
