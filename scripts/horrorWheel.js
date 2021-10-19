( function( $ ) {

  var effectsArray =
  '[{"type": "buff","name": "Да ваще не страшно","pic": "icon001.png","description": "при каждом твоем крике - сабка"},'+
  '{"type": "buff","name": "Откукда звуки?!","pic": "icon005.png","description": "семплы со скримерами"},'+
  '{"type": "buff","name": "Ну нахер","pic": "icon003.png","description": "повышение градуса самого хоррора (от пусеченых до самых страшных)"},'+
  '{"type": "buff","name": "В бездну список","pic": "icon004.png","description": "плюс игра, минус игра"},'+
  '{"type": "buff","name": "Повелитель ночи","pic": "icon002.png","description": "выключить свет"},'+
  '{"type": "buff","name": "Пьянка с ебаками","pic": "icon006.png","description": "алко обсёр (додумать) выпивать за каждый напуг"},'+
  '{"type": "buff","name": "Супер сус","pic": "icon007.png","description": "сидеть какое то время с фанариком у подбородка (додумать мб?)"},'+
  '{"type": "buff","name": "140 BPM","pic": "icon008.png","description": "Пульсометр (превысил какое значение че то делаешь) - крутится колесо, но это может произойти только один раз за стрим."},'+
  '{"type": "buff","name": "empty","pic": "icon009.png","description": "кто больше всего раз крикнет или явно испугается дарит 50 сабок на канал победителя (в случае если коллаб ивент)"},'+
  '{"type": "buff","name": "Не хочу умирац","pic": "icon010.png","description": "Следующая игра ролится из категории супер страшные"},'+
  '{"type": "buff","name": "Outlast","pic": "icon011.png","description": "Временно накатить на вебку фильтр ночного виденья"},'+
  '{"type": "buff","name": "Welcome to the family son","pic": "icon012.png","description": "страшные алерты"},'+
  '{"type": "buff","name": "empty","pic": "icon013.png","description": "прикол с громкостью (?)"},'+
  '{"type": "buff","name": "Коричневые паруса","pic": "icon014.png","description": "пойти сменить труханы и показать на стриме сами труханы без себя"},'+
  '{"type": "buff","name": "200 IQ","pic": "icon015.png","description": "если не можешь пройти загадку за 5 мин, то пьешь че-то или что-то еще"},'+
  '{"type": "buff","name": "(\/) MLG (\/)","pic": "icon016.png","description": "Что-то за геймоверы"},'+
  '{"type": "buff","name": "Судьба","pic": "icon017.png","description": "Переход через категорию. Если и вы и так на максимальной категории, то воля случая. Орел - плюс игры; Решка - повезло."},'+
  '{"type": "buff","name": "Повезло повезло","pic": "icon018.png","description": "Понижение категории"},'+
  '{"type": "buff","name": "Стабильность","pic": "icon019.png","description": "следующая игра будет на текущей категории"},'+
  '{"type": "buff","name": "Есть два стула","pic": "icon020.png","description": "Стримерский стул меняется на табуретку. Если стример упал с табуретки от испуга - что-то?"},'+
  '{"type": "buff","name": "Киновечер","pic": "icon021.png","description": "с фильмом ужасов (выбор из списка, заказанного зрителями)"},'+
  '{"type": "buff","name": "empty","pic": "legend_icon.png","description": ""},'+
  '{"type": "buff","name": "empty","pic": "icon004.png","description": "Следующие 3 барабана будут по фикс прайсу"}]';
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
      soundFile.src = "src/audio/horror/" + name + ".mp3";
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
      let height = 80;
      let width = (circumference / items) + 1;

      for ( let i = 0; i < jsonObject.length; i++ ) {

          var transform = `rotateY(${ angle * i }deg) translateZ(${ radius }px)`;
          $( '<div>', {class: 'wheel__segment'} )
          .html( `<span> <img src="src/assets/wheel_horror/icons/` + jsonObject[i].pic + `" width="60" height="60"> </span>` ).appendTo( $wheel )
          .css( {'transform': transform,'height': height, 'width': width, 'background-image': 'url(src/assets/wheel_img/'+jsonObject[i].type+'.png)'} )

      }
      $wheel.css('margin-top','-'+height+'px');
      $wheel.css('margin-left','-'+width/2+'px');

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
        let height = 80;
        let width = (circumference / items) + 1;

        for ( let i = 0; i < result.length; i++ ) {
            var transform = `rotateY(${ angle * i }deg) translateZ(${ radius }px)`;

            $( '<div>', {class: 'wheel__segment'} )
            .html( `<span> <img src="src/assets/wheel_horror/icons/` + jsonObject[i].pic + `" width="60" height="60"> </span>` ).appendTo( $wheel )
            .css( {'transform': transform,'height': height, 'width': width, 'background-image': 'url(src/assets/wheel_img/'+jsonObject[i].type+'.png)'} )
            .click(function() {

              deletedEffects.push(jsonObject[i]);
              playSound("crow");
              console.log(jsonObject[i]);
            });
        }
        $wheel.css('transform-origin','100% 100%');
        $wheel.css('margin-top','-'+height+'px');
        $wheel.css('margin-left','-'+width/2+'px');

        $wheel.change();

        $("#descriptionName").text('');
        $("#descriptionText").text('');
        $("#descriptionLegendary").text('');

        // playSound("spinning/" + spinSounArray[Math.floor(getRandom(spinSounArray.length,0))]);

        $wheelSpinClass.addClass('wheelAnimation');

          var rotateDeg = getRandom(360,angle/2);

          var currentPosition = (360 - (rotateDeg-(angle/2)))/angle;
          // var currentPosition = 9;
          var roundedPosition = Math.floor(currentPosition);

          console.log("rotated: " + rotateDeg + " current: " + currentPosition + " roundedPosition: " + roundedPosition);

          $wheelSpinClass.css('transform', 'rotateY(' + rotateDeg + 'deg)');
          setTimeout(function(){
            $wheelSpinClass.removeClass('wheelAnimation');

            $("#descriptionName").text(jsonObject[roundedPosition].name);
            $("#descriptionText").text(jsonObject[roundedPosition].description);

            if(jsonObject[roundedPosition].type == "debuff") {
              // playSound("sorry");
            } else if (jsonObject[roundedPosition].type == "legendary") {
              // playSound("legendary");

              let legendaryPosition = Math.floor(getRandom(horrorsCategoryArray.length, 0))
              $("#descriptionName").text('');

              $("#descriptionLegendary").addClass('spin');

              setTimeout(function(){
                $("#descriptionLegendary").removeClass('spin');
                $("#descriptionLegendary").text(horrorsCategoryArray[legendaryPosition]);
              }, 2000);

            } else {
              playSound("thunder");
            }

          }, 9300);
       });

    }

    doWheel(jsonObject);

} )( jQuery );
