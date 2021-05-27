let info;
let clickCount = 0;

class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/sky4.png');
        this.load.image('crate', 'assets/sprites/crate.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');
        var box = this.add.image(200, 150, 'crate');
        box.setInteractive();
        box.on('clicked', this.clickHandler, this);
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

    clickHandler (box)
    {
        clickCount++;
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: [ Example ]
};

const game = new Phaser.Game(config);
