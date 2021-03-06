// var patsPokeWorld = {}
// var oak;
// var arrowBoys;


var Game = {};
let map

Game.init = function() {
  game.stage.disableVisibilityChange = true;
}

// patsPokeWorld.state1 = function(){}

// Game.init = function(){
//     game.stage.disableVisibilityChange = true;
// };

Game.preload = function() {
  game.load.image('pallet', './assets/theRoom.png')
  game.load.image('ash', 'assets/ash.png')
  game.load.image('gary', 'assets/gary.png')
  game.load.image('rocket', 'assets/rocket.png')
  game.load.image('prof', 'assets/prof.png')
  game.load.image('brock', 'assets/brock.png')
  game.load.image('fisherman', 'assets/fisherman.png')
  game.load.image('misty', 'assets/misty.png')
  game.load.image('newnew', 'assets/newnew.png')
  game.load.image('evilguy', 'assets/evilguy.png')
  game.load.image('goon', 'assets/goon.png')
  game.load.image('knucks', 'assets/knucks.png')
};

Game.create = function() {
  Game.playerMap = {};
  // map = game.add.tilemap();
  // //  Creates a new blank layer and sets the map dimensions.
  // //  In this case the map is 40x30 tiles in size and the tiles are 32x32 pixels in size.
  // layer1 = map.create('theRoom',10,10,10,10);
  // var testKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
  // testKey.onDown.add(Client.sendTest, this)
  // var map2 = game.add.group()
  // var map = map.create(0, 0, 'pallet')
  map = game.add.tileSprite(0, 0, 512, 512, 'pallet')
  // map = game.add.sprite(0, 0, 'pallet')
  // map.createLayer()
  map.inputEnabled = true;
  map.events.onInputUp.add(Game.getCoordinates, this)
  console.log('where am i?')
  // var layer = map.createLayer();
  // // // // for(var i = 0; i < map.layers.length;s i++) {
  // // // //     layer = map.createLayer(i);
  // // // // }
  // layer.inputEnabled = true; // Allows clicking on the map ; it's enough to do it on the last layer
  // layer.events.onInputUp.add(Game.getCoordinates, this);
  Client.askNewPlayer();

  // var cursors = game.input.keyboard.createCursorKeys()
};



// Game.update = function(){
//   var player = Game.playerMap[id]
//         player.body.velocity.x = 0
//           if (cursors.left.isDown) {
//               //move to the left
//               player.body.velocity.x = -100;
//           } else if (cursors.right.isDown) {
//               //move to the right
//               player.body.velocity.x = 100;
//           } else if (cursors.up.isDown) {
//               //move up
//               player.body.velocity.y = -100
//           } else if (cursors.down.isDown){
//               //move down
//               player.body.velocity.y = 100
//
//           } else {
//               //stand still
//               player.body.velocity.x = 0;
//               player.body.velocity.y = 0;
//           }
// }

Game.getCoordinates = function(map, pointer) {
  Client.sendClick(pointer.worldX, pointer.worldY);
};

Game.addNewPlayer = function(id, x, y) {
  let avatar;
  let randomNumber = Math.floor(Math.random() * 11)

  switch (randomNumber) {
    case 0:
      avatar = 'ash'
      break;
    case 1:
      avatar = 'gary'
      break;
    case 2:
      avatar = 'rocket'
      break;
    case 3:
      avatar = 'prof'
      break;
    case 4:
      avatar = 'brock'
      break;
    case 5:
      avatar = 'fisherman'
      break;
    case 6:
      avatar = 'misty'
      break;
    case 7:
      avatar = 'newnew'
      break;
    case 8:
      avatar = 'evilguy'
      break;
    case 9:
      avatar = 'goon'
      break;
    case 10:
      avatar = 'knucks'
      break;
  }
  Game.playerMap[id] = game.add.sprite(x, y, `${avatar}`);
  // Game.playerMap[id] = game.add.sprite(x,y,'ash');
  // var player = Game.playerMap[id];
  // player.createLayer()
  // game.physics.arcade.enable(Game.playerMap[id])
  // Game.playerMap[id].body.collideWorldBounds = true;
  // Game.playerMap[id].body.allowGravity = false;
};

Game.movePlayer = function(id, x, y) {
  var player = Game.playerMap[id];
  var distance = Phaser.Math.distance(player.x, player.y, x, y);
  var tween = game.add.tween(player);
  var duration = distance * 10;
  tween.to({
    x: x,
    y: y
  }, duration);
  tween.start();
};

Game.removePlayer = function(id) {
  Game.playerMap[id].destroy();
  delete Game.playerMap[id];
};

// Game.movement = function(){
//     Client.movement(player.id, player.position.x, player.position.y) //sends data to client file, movement function
// }

// Game.movePlayer = function(data){ //gets from client
//
// }


// // patsPokeWorld.state1.prototype = {
//
//   preload: function(){
//
//     },
//
//     create: function(){
//       patsPokeWorld.state1.playerMap = {}
//       game.physics.startSystem(Phaser.Physics.ARCADE);
//
//       // this.game.scale.pageAlignHorizontally = true; this.game.scale.pageAlignVertically = true;
//       // this.game.scale.refresh();
//
//
//       game.add.sprite(0, 0, 'pallet-town')
//
//       // var layer;
//       // for(var i = 0; i < map.layers.length; i++) {
//       //   layer = map.createLayer(i);
//       // }
//       // layer.inputEnabled = true; // Allows clicking on the map ; it's enough to do it on the last layer
//       // layer.events.onInputUp.add(patsPokeWorld.state1.getCoordinates, this);
//
//
//       Client.askNewPlayer()
//
//       //oak = game.add.sprite(50, 400, 'oak');
//       // oak.animations.add('idle', [0], 4, true);
//       // oak.animations.add('left', [1,2,3,4], 4, true);
//       // oak.animations.add('right', [5,6,7,8], 4, true);
//       // oak.animations.add('up', [9,10,11], 3, true);
//       // oak.animations.add('down', [9,10,11], 3, true);
//       // oak.animations.play('idle')
//
//       // game.physics.arcade.enable(oak);
//       // oak.body.collideWorldBounds = true;
//       // oak.body.allowGravity = false;
//
//       //cursors = game.input.keyboard.createCursorKeys();
//     },
//
//     update: function(){
//     //   oak.body.velocity.x = 0
//     //   if (cursors.left.isDown) {
//     //       //move to the left
//     //       oak.body.velocity.x = -100;
//     //   } else if (cursors.right.isDown) {
//     //       //move to the right
//     //       oak.body.velocity.x = 100;
//     //   } else if (cursors.up.isDown) {
//     //       //move up
//     //       oak.body.velocity.y = -100
//     //   } else if (cursors.down.isDown){
//     //       //move down
//     //       oak.body.velocity.y = 100
//     //
//     //   } else {
//     //       //stand still
//     //       oak.body.velocity.x = 0;
//     //       oak.body.velocity.y = 0;
//     //   }
//     // }
// }

// patsPokeWorld.state1.getCoordinates = function(layer,pointer){
//     Client.sendClick(pointer.worldX,pointer.worldY);
// };



// patsPokeWorld.state1.movePlayer = function(id,x,y){
//     var player = patsPokeWorld.playerMap[id];
//     var distance = Phaser.Math.distance(player.x,player.y,x,y);
//     var tween = game.add.tween(player);
//     var duration = distance*10;
//     tween.to({x:x,y:y}, duration);
//     tween.start();
// };
//
// patsPokeWorld.state1.removePlayer = function(id){
//     patsPokeWorld.state1.playerMap[id].destroy();
//     delete patsPokeWorld.state1.playerMap[id];
// };
