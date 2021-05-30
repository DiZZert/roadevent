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
        pluginManager.registerGameObject('mark', this.createMark);
    }

    createMark (x, y)
    {
        return this.displayList.add(new markGameObject(this.scene, x, y));
    }
}
