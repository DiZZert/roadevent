import { markPlugin } from './doMark.js';

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

        this.add.mark(200, 150);
        this.add.mark(200, 300);

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
    plugins: {
        global: [
            { key: 'markPlugin', plugin: markPlugin, start: true }
        ]
    },
    scene: [ marksMap ]
};

const game = new Phaser.Game(config);
