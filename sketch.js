var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var C1 ,C2,C3,C4,track,ground
var cars, car1, car2, car3, car4;


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState ===2){
    game.end();
  }
}
function preload(){
  C1 = loadImage("car1.png")
  C2 = loadImage("car2.png")
  C3 = loadImage("car3.png")
  C4 = loadImage("car4.png")
  track = loadImage("track.jpg")
  ground = loadImage("ground.png")

}
