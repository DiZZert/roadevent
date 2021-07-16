( function( $ ) {

    const $wheel = $( '.wheel .wheel__inner' );
    const $wheelSpinClass = $( '.wheel__inner' );
    const items = 6;
    const diameter = $wheel.height();
    const radius = diameter / 2;
    const angle = 360 / items; //вычисление угла наклона
    const circumference = Math.PI * diameter; //длинна окружности
    const height = (circumference / items) + 22; //высота блока

    function getRandom() {
      return Math.random() * (361 - 0);
    }

    var soundFile = document.createElement("audio");
    soundFile.src = "src/audio/spinning/spinSound.mp3";

    var objArray =
    '[{"type": "buff","name": "Stream Avatars","pic": "avatars.png","description": "стример запускает приложуху https://store.steampowered.com/app/665300/Stream_Avatars/ . Там есть вкладка что бы участовали онли сабы. Внутри приложения есть несколько мини-игр. Победители в них пишут любую желающую игру. Так 8? раз, длительность каждой игры 30? минут. А так же это приложение остается на весь сабдей, что бы сабы бегали на фоне пока стример будет играть в игры."},'+
    '{"type": "debuff","name": "МультиплеерСабДей","pic": "multiday.png","description": "сабы указывают %игру из заранее мультиплеер списка. Стример рандомно выбирает 8? игр. Желающие поучастовать в каждой игре сабы пишут стримеру в лс. Длительность каждой игры несколько партий. Награда немного флоренов победившим. "},'+
    '{"type": "buff","name": "Обычный Сабдей","pic": "obich.png","description": "сабы указывают %любую игру, видео по желанию. Стример рандомно выбирает 8 человек."},'+
    '{"type": "buff","name": "Годовое SGG колесо","pic": "sgg.png","description": "все сабы указывают %любой год по желанию начиная с 2000?. Стример с помощью сайта https://gamegauntlets.com/ рандомно крутит 8 игр. Длительность каждой игры 40? минут."},'+
    '{"type": "debuff","name": "СтимБиблиотека","pic": "steamrandom.png","description": "все сабы указывают %свою библиотеку стимовскую. Стример с помощью сайта https://servc.eu/rsg/ рандомно достает по одной игре с 8? библиотек сабов. Длительность каждой игры 40? минут."},'+
    '{"type": "debuff","name": "Интерактивные шарики","pic": "intershariki.png","description": "стример запускает stream marbles. Туда заходят онли желающие сабы(если можно так), устраивается 8? разных гонок на разных картах, каждый победитель на них выбирает любую желающую игру. Длительность каждой игры 40? минут.(первый вариант сабы указывают свои ники и после выбирают игру) (второй вариант сабы вместо ников указывают игру которую они хотят)"}]';
    ;

    // console.log(objArray);

    var jsonObject = jQuery.parseJSON(objArray);

      //создание окружности из заданного количесва элементов
      for ( let i = 0; i < items; i++ ) {
          var transform = `rotateX(${ angle * i }deg) translateZ(${ radius }px)`;
          // console.log(transform);

          $( '<div>', {class: 'wheel__segment'} )
          .html( `<span> <img src="src/assets/wheel_icons/subday_type/` + jsonObject[i].pic + `" width="60" height="60"> </span>` ).appendTo( $wheel )
          .css( {'transform': transform,'height': height, 'background-image': 'url(src/assets/wheel_img/white_bg.png)'} );
          // .click(function() { $("#descriptionName").text(jsonObject[i].name), $("#descriptionText").text(jsonObject[i].description) });
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

        $wheelSpinClass.css('transform', 'rotateX(' + rotateDeg + 'deg)');

        setTimeout(function(){
          $wheelSpinClass.removeClass('wheelAnimation');

          $("#descriptionName").text(jsonObject[roundedPosition].name);
          $("#descriptionText").text(jsonObject[roundedPosition].description);

        }, 9000);
     });

} )( jQuery );
