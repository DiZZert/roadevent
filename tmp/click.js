let info;
let clickCount = 0;

class marksMap extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
      this.load.path = "./src/assets/marks/";
      this.load.image("mark", "shield.png");
    }

    create ()
    {

        var pointMark = this.add.image(200, 150, 'mark');
        pointMark.setScale(0.1);
        pointMark.setInteractive();
        pointMark.on('clicked', this.clickHandler, this);
        clickCount++;
        this.input.on('gameobjectup', function (pointer, gameObject)
        {
            gameObject.emit('clicked', gameObject);
        }, this);

        info = this.add.text(10, 10, '', { font: '48px Arial', fill: '#000000' });
    }

    update ()
    {
        info.setText('Clicks: ' + clickCount);
    }

    clickHandler (pointMark)
    {
        clickCount++;
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: '#848482',
    scene: [ marksMap ]
};

const game = new Phaser.Game(config);


// function mapMark(markType, markColor) {
//   if (markColor != null) {
//     switch (markType) {
//       case markWhite:
//         //return white mark
//         break;
//       case markGreen:
//         //return green mark
//         break;
//       case markRed:
//         //return red mark
//         break;
//       default:
//         return null;
//     }
//   } else {
//     switch (markType) {
//       case markTreasure:
//         //return treasure mark
//         break;
//       case markPVP:
//         //return pvp mark
//         break;
//       default:
//         return null;
//   }
// }
