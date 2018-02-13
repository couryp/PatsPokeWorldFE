// var patsPokeWorld = {}
// var oak;
// var arrowBoys;


var Game = {};

Game.init = function(){
    game.stage.disableVisibilityChange = true;
}

// patsPokeWorld.state1 = function(){}

// Game.init = function(){
//     game.stage.disableVisibilityChange = true;
// };

Game.preload = function() {
  game.load.image('pallet', './assets/theRoom.png')
  game.load.image('oak', 'assets/Oak.png')
  game.load.image('ash', 'assets/ash.png')
};

Game.create = function(){
    Game.playerMap = {};

    var map;
    map = game.add.sprite(0, 0, 'pallet')

    // var layer = map.createLayer();
    // // // // for(var i = 0; i < map.layers.length;s i++) {
    // // // //     layer = map.createLayer(i);
    // // // // }
    // layer.inputEnabled = true; // Allows clicking on the map ; it's enough to do it on the last layer
    // layer.events.onInputUp.add(Game.getCoordinates, this);
    Client.askNewPlayer();

    var cursors = game.input.keyboard.createCursorKeys()
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

// Game.getCoordinates = function(layer,pointer){
//     Client.sendClick(pointer.worldX,pointer.worldY);
// };

Game.addNewPlayer = function(id,x,y){
    // var player = Game.playerMap[id];
    Game.playerMap[id] = game.add.sprite(x,y,'ash');
    game.physics.arcade.enable(Game.playerMap[id])
    Game.playerMap[id].body.collideWorldBounds = true;
    Game.playerMap[id].body.allowGravity = false;
};

// Game.movePlayer = function(id,x,y){
//     var player = Game.playerMap[id];
//     var distance = Phaser.Math.distance(player.x,player.y,x,y);
//     var tween = game.add.tween(player);
//     var duration = distance*10;
//     tween.to({x:x,y:y}, duration);
//     tween.start();
// };

Game.movement = function(){
    Client.movement(player.id, player.position.x, player.position.y) //sends data to client file, movement function
}

Game.movePlayer = function(data){ //gets from client

}

Game.removePlayer = function(id){
    Game.playerMap[id].destroy();
    delete Game.playerMap[id];
};




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
