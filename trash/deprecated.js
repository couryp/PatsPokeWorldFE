// let game = new Phaser.Game(500, 500, Phaser.AUTO, '',
//  { preload: preload,
//     create: create,
//     update: update });

// var game = new Phaser.Game(16*32, 600, Phaser.AUTO, document.getElementById('game'));
//
// game.state.add('Game',Game);
// game.state.start('Game');
// var Game = {};


function preload() {
  game.load.image('pallet-town', 'assets/PalletTown.png')
  game.load.image('oak', 'assets/Oak.png')
}

let ash;
let arrows;

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);

  this.game.scale.pageAlignHorizontally = true; this.game.scale.pageAlignVertically = true;
  this.game.scale.refresh();


  game.add.sprite(0, 0, 'pallet-town')


  Client.askNewPlayer()

  ash = game.add.sprite(50, 400, 'oak');
  // ash.animations.add('idle', [0], 4, true);
  // ash.animations.add('left', [1,2,3,4], 4, true);
  // ash.animations.add('right', [5,6,7,8], 4, true);
  // ash.animations.add('up', [9,10,11], 3, true);
  // ash.animations.add('down', [9,10,11], 3, true);
  // ash.animations.play('idle')

  game.physics.arcade.enable(ash);
  ash.body.collideWorldBounds = true;
  ash.body.allowGravity = false;

  arrows = game.input.keyboard.createCursorKeys();

}

function update() {
  ash.body.velocity.x = 0
  if (arrows.left.isDown) {
      //move to the left
      ash.body.velocity.x = -100;
  } else if (arrows.right.isDown) {
      //move to the right
      ash.body.velocity.x = 100;
  } else if (arrows.up.isDown) {
      //move up
      ash.body.velocity.y = -100
  } else if (arrows.down.isDown){
      //move down
      ash.body.velocity.y = 100

  } else {
      //stand still
      ash.body.velocity.x = 0;
      ash.body.velocity.y = 0;
  }

}
