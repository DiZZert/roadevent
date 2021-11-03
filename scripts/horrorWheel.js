( function( $ ) {

  var effectsArray =
  // '[{"type": "buff","name": "Плюс игра","pic": "icon001.png","description": "добавляем плюс игру для прохождения в ходе ивента"},'+
  '[{"type": "buff","name": "Минус игра","pic": "icon005.png","description": "теперь нужно пройти на одну игру меньше"},'+
  '{"type": "buff","name": "Курочка с рисом (легендарный предмет)","pic": "icon003.png","description": "cтример имеет право рерольнуть следующую игру"},'+
  // '{"type": "buff","name": "Страшно, надо выпить (категория 4 и выше)","pic": "icon005.png","description": "стример выпивает за каждый испуг, закусывать можно (на один стрим)"},'+
  // '{"type": "buff","name": "Пульсометр","pic": "icon004.png","description": "стример надевает пульсометр и выводит пульс на экран. Затем он ролит значение от 100 до 150. Если в ходе стрима пульс достигнет данной отметки, то плюс бесплатное кручение колеса (только один раз за стрим). Действует до конца прохождения текущей игры. Также, данный пункт автоматически распространяется на каждую игру категорий РЕЗНЯ и Золотая Коллекция"},'+
  '{"type": "buff","name": "Ну я так и знал","pic": "icon002.png","description": "следующая для прохождения игра будет ролится из самой страшной на данной момент категории из всех открытых"},'+
  //'{"type": "buff","name": "Мешок с деньгами (легендарный предмет)","pic": "icon006.png","description": "следующую игру выбирает донатер, активировавший колесо. Игра будет выбираться на актуальной категории. Также, при выпадении данного предмета, у чата будет 10 минут, чтобы докинуть на ещё на одно колесо и тогда, кто активировал таймерное колесо, тот выбирает категорию, из которой будет выбирать донатер с предметом"},'+
  '{"type": "buff","name": "Мааам, я домой хочу","pic": "icon007.png","description": "следующая игра будет ролиться из списка Пусечная (1 категория). После прохождения переходим на предыдущая категория + 1"},'+
  //'{"type": "buff","name": "Хардкор","pic": "icon008.png","description": "cледующая игра с выбором сложности будет проходиться на максимальной сложности (одна жизнь не в счёт)"},'+
  '{"type": "buff","name": "Страшная кукла (легендарный предмет)","pic": "icon009.png","description": "тот, кто активировал данное колесо имеет полное право добавить плюс игру, либо добавить два дополнительных бесплатных колёс к прокруту. Выбор за держателем куклы"},'+
  '{"type": "buff","name": "Чёрная пятница","pic": "icon010.png","description": "следующие три колеса будут по фиксированной цене в 700 рублей"},'+
  '{"type": "buff","name": "Ну тут без вариантов","pic": "icon011.png","description": "запускаем голосование в чате на плюс игра и минус игра. Победивший вариант будет применён немедленно"},'+
  //'{"type": "buff","name": "Кожаный ошейник (легендарный предмет)","pic": "icon012.png","description": "стример имеет право дропнуть текущую, либо следующую игру без последствий (Не распространяется на выкуп). Дроп никак не отображается на общем количестве пройденных игр"},'+
  '{"type": "buff","name": "Повезло, повезло","pic": "icon013.png","description": "cтример подбрасывает монетку на сайте, предварительно задав условия для Плюс игра и Минус игра"},'+
  // '{"type": "buff","name": "GOLOSOVANIE","pic": "icon014.png","description": "следующая игра будет выбираться чатом в несколько туров из всего пула игр. Категория так же будет выбрана чатом из всех доступных (Золотую Коллекцию выбирать нельзя)"},'+
  // '{"type": "buff","name": "Скримеры? Какие скримеры? (категория 2 и выше)","pic": "icon015.png","description": "всю следующую игру будут стоять страшные алерты на донаты и сабки"},'+
  '{"type": "buff","name": "Давай по новой","pic": "icon016.png","description": "донатгол для кручения колеса снова начинается с 500 рублей. В случае если значение и так 500, то реролл"},'+
  // '{"type": "buff","name": "Казиныч","pic": "icon017.png","description": "в  чате запускается ставка на 10 минут. Синяя ставка - минус игра, красная - плюс игра. Победившая ставка идёт в зачёт, однако шоблинги уходят зрителям, которые выбрали противоположный вариант"},'+
  '{"type": "buff","name": "Попался! (категория 2 и выше)","pic": "icon018.png","description": "стример дарит сабки за каждый второй геймовер. Действует до конца прохождения текущей игры"},'+
  '{"type": "buff","name": "Страшный киновечер","pic": "icon019.png","description": "после выпадения данного пункта активируется приём заказов кина (как на сабдее, %кино). Жанр - ужасы. В конце стрима ролл и просмотр. Если пункт выпал к концу стрима, то перенос на следующий эфир"},'+
  // '{"type": "buff","name": "ЗОЛОТАЯ КОЛЛЕКЦИЯ","pic": "icon020.png","description": "следующая игра для прохождения будет из элитного списка, из которого игру выбирут зрители. Прохождение не идёт в общий зачёт пройденных игр. Может выпасть только один раз за весь ивент"},'+
  '{"type": "buff","name": "Страшно, надо выпить (категория 4 и выше)","pic": "icon021.png","description": "стример выпивает за каждый испуг, закусывать можно (на один стрим)"},'+
  // '{"type": "buff","name": "Выключение света","pic": "icon022.png","description": "стример гарантированно проходит все игры до конца ивента без света"},'+
  // '{"type": "buff","name": "Шо то, шо это","pic": "icon023.png","description": "перед стримером встаёт выбор, получить Плюс игру, либо проходить следующую игру на максимальной из всех доступных категорий. Если он и так на ней, то выбора нет, плюс игра"},'+
  '{"type": "buff","name": "На пенёк сел, жопу потерял (категория 4 и выше)","pic": "icon004.png","description": "стримерский стул меняется на парашный табурет. Если стример упал с табурета, то Плюс игра (только один раз). Действует на текущую и следующую игры до падения, если оно будет"}]';
  ;

  var spinSounArray = [
    "ch_shouting",
    "cr_instr01",
    "creepy_ghost_ch",
    "girl_singing",
    "lullaby",
    "piano",
    "tension01",
    "tension02",
    "tension03",
    "tension04",
    // "tension05",
    "broken_radio",
    "chain",
    "howl",
    "radio",
    "song",
    "song1",
    "whispers"
  ];

  var posSFXArray = [
    "thunder",
    "thunder1",
    "impact01",
    "impact02",
    "impact03",
    "impact04",
    "impact05",
    "metal01",
    "metal02",
    "metal03",
    "metal04",
    "metal05",
    "metal06",
    "tension",
    "whosh"
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
          .css( {'transform': transform,'height': height, 'width': width, 'background-image': 'url(src/assets/wheel_img/buff_allgreen.png)'} )

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
            .css( {'transform': transform,'height': height, 'width': width, 'background-image': 'url(src/assets/wheel_img/buff_allgreen.png)'} )
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

        playSound("spin/" + spinSounArray[Math.floor(getRandom(spinSounArray.length,0))]);

        $wheelSpinClass.addClass('wheelAnimation');

          var rotateDeg = getRandom(360,angle/2);

          var currentPosition = (360 - (rotateDeg-(angle/2)))/angle;
          var roundedPosition = Math.floor(currentPosition);

          $wheelSpinClass.css('transform', 'rotateY(' + rotateDeg + 'deg)');

          // console.log("rotated: " + rotateDeg + " current: " + currentPosition + " roundedPosition: " + roundedPosition);
          console.log("rotated: " + rotateDeg + " current: " + currentPosition + " " + jsonObject[roundedPosition].name);

          setTimeout(function(){
            $wheelSpinClass.removeClass('wheelAnimation');

            $("#descriptionName").text(jsonObject[roundedPosition].name);
            $("#descriptionText").text(jsonObject[roundedPosition].description);

            playSound("effects/" + posSFXArray[Math.floor(getRandom(posSFXArray.length,0))]);

          }, 9300);
       });

    }

    doWheel(jsonObject);

} )( jQuery );
