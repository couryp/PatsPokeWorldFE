
var Client = {};
Client.socket = io('http://localhost:8081')
// Client.socket = io.connect();


Client.askNewPlayer = function(){
    Client.socket.emit('newplayer');
};

Client.sendClick = function(x,y){
  console.log('clicking')
  Client.socket.emit('click',{x:x,y:y});
};

Client.socket.on('newplayer',function(data){
    Game.addNewPlayer(data.id, data.x, data.y);
});

Client.socket.on('allplayers',function(data){
    for(var i = 0; i < data.length; i++){
        Game.addNewPlayer(data[i].id, data[i].x, data[i].y);
    }
    // Client.movement = function(id,frame,x,y, direction){
    //     Client.socket.emit('cursor',{id:id,frame:frame,x:x,y:y,direction:direction})
    // }
    Client.socket.on('move',function(data){
      Game.movePlayer(data.id,data.x,data.y);
    });


    Client.socket.on('remove',function(id){
        Game.removePlayer(id);
    });
});
