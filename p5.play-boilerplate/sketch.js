var player; //global variable
var playerAnimation;

function preload(){
  playerAnimation = loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png")
}

function setup(){
  createCanvas(800,800);
  player = createSprite(400,400,50,50);
  player.addAnimation("running",playerAnimation)

}

function draw(){
  background(0);
  drawSprites();
}