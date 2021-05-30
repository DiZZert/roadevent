let info;
let clickCount = 0;

class markGameObject extends Phaser.GameObjects.Image {
    constructor (scene, x, y)
    {
        super(scene, x, y, 'mark');
        this.setScale(0.1);
        // this.setInteractive();
        // this.on('clicked', this.clickHandler, this);
        // clickCount++;
        // this.input.on('gameobjectup', function (pointer, gameObject)
        // {
        //     gameObject.emit('clicked', gameObject);
        // }, this);
    }
}

class markPlugin extends Phaser.Plugins.BasePlugin {
    constructor (pluginManager)
    {
        super(pluginManager);
        pluginManager.registerGameObject('mark', this.createClown);
    }

    createMark (x, y)
    {
        return this.displayList.add(new markGameObject(this.scene, x, y));
    }
}

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
