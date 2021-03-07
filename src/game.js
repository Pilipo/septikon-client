import Phaser from 'phaser'

class Test extends Phaser.Scene
{
  constructor () {
    super();
  }

  preload () {
    this.load.image('board', 'maps/medium_board_croped.png');
    this.load.tilemapTiledJSON('map', 'maps/board.json');
  }

  create () {
    this.scale.fullScreenScaleMode = Phaser.Scale.FIT;
    const map = this.make.tilemap({key: 'map'});
    const tileset = map.addTilesetImage('medium_board_croped', 'board', 32, 32, 0, 0);
    const layer1 = map.createLayer('Tile Layer 1', tileset, 0, 0);
  }

  update () {
  }
}

const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  scene: [ Test ],
}

const game = new Phaser.Game(config);
