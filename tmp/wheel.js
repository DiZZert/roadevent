( function( $ ) {

    const $wheel = $( '.wheel .wheel__inner' );
    const items = 14;
    const diameter = $wheel.height();
    const radius = diameter / 2;
    const angle = 360 / items;
    const circumference = Math.PI * diameter;
    const height = circumference / items;

    var objArray = '[{"name": "Алкострим","pic": "alco.png","description": "стример делает глотки за каждого подписочного саба + к этому при определенных условиях в играх, например смерть. (на весь стрим)","color": "#5e892f"},{"name": "Монополия","pic": "empty.png","description": "монополия со стримером и 4 сабами с войсом в дискорде на сайте https://monopoly-one.com/ (пару партий) (одноразово) (можно использовать для перерыва)","color": "#5e892f"},{"name": "Своя игра","pic": "empty.png","description": "своя игра со стримеров и до 8 сабов с войсом/без в дискорде. Несколько заранее заготовленных паков. (пару паков) (одноразово) (можно использовать для перерыва)","color": "#5e892f"},{"name": "Тест","pic": "empty.png","description": "стример проходит тесты от сабов. (пару тестов) (одноразово) (можно использовать для перерыва)","color": "#5e892f"},{"name": "Даунита","pic": "daynitakostum.png","description": "при выпадении стример надевает одну вещь из гардероба на голову. (на весь стрим) при повторном выпадении надевает вторую синергичную вещь","color": "debuff"},{"name": "Танцульки","pic": "dance.png","description": "стример выбирает несколько песен предложенных от сабов и из них выбирается одна наиболее подходящая для танца. (одноразово)","color": "debuff"},{"name": "Экран 180 градусов","pic": "1802.png","description": "на 20? минут у стримера поворачивается экран. (одноразово) (пруфануть можно в определенной сцене)","color": "debuff"},{"name": "Караокич","pic": "karaoke.png","description": "выбирает несколько песен от сабов и исполняет. (одноразово)","color": "debuff"},{"name": "Монеточка","pic": "monetka.png","description": "при выпадении стример кидает монетку. Если падает орел, то добавляет x2 от текущего времени игры(например если осталось 20 минут игры, то умножаешь на 2 и играешь еще дополнительно 20 минут). Если падает решка, то делишь на 2 от текущего времени игры(например если осталось 20 минут игры, то делишь на 2 и играешь только 10 минут)","color": "debuff"},{"name": "Черно-белый","pic": "chernbel.png","description": "на 20? минут у стримера включается черно-белый режим на игре. (одноразово) (пруфануть можно в определенной сцене)","color": "debuff"},{"name": "Сэмплы","pic": "sample.png","description": "до конца стрима включаются сэмплы которые могут юзать только сабы. (на весь стрим) ","color": "debuff"},{"name": "Гачи-тайм","pic": "empty.png","description": "включается мубот куда сабы закидывают онли гачи треки. (на пару часов) Минимальные настройки(дебафф) - на 20? минут у стримера включается минимальные настройки + разрешение в игре. (одноразово)","color": "debuff"},{"name": "Смотровик","pic": "empty.png","description": "следующие 5 видосов на перерыве будут не скипабельными, кроме осуждающего контента. (одноразово)","color": "debuff"},{"name": "Качек","pic": "empty.png","description": "стример делает физ.сет. (одноразово)","color": "debuff"}]';
    var jsonObject = jQuery.parseJSON(objArray);

    for ( let i = 0; i < items; i++ ) {
        var transform = `rotateX(${ angle * i }deg) translateZ(${ radius }px)`;

        $( '<div>', {class: 'wheel__segment'} )
        .html( `<span> <img src="src/assets/wheel_icons/` + jsonObject[i].pic + `" width="60" height="60"> </span>` ).appendTo( $wheel )
        .css( {'transform': transform,'height': height, 'background-color': jsonObject[i].color} );
    }

  $wheel.css('transform-origin','50% calc(50% + '+height/2+'px)');
  $wheel.css('margin-top','-'+height+'px'); /* negative margin here to keep the element into the center */

} )( jQuery );
