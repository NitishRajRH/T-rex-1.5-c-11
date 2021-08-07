
var trex ,trex_running;
var ground;
var groundImage;
var iGround;

//loads the animations
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")  
  groundImage = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)

  //ground animation is added
  ground = createSprite(300,180,600,10);
  ground.velocityX = -10;
  ground.addImage("groundImage",groundImage);
  ground.x = ground.width/2

  //trex is created
  trex = createSprite(50,160);
  trex.addAnimation("trexRunning",trex_running);
  trex.scale = 0.5;

  //invisible ground created
  iGround = createSprite(300,190,600,10)
  iGround.visible = false; 

  edges = createEdgeSprites();

}

function draw(){
  //backround color
  background("white")

  console.log(trex.y);
  //jump when space key is pressed
  if(keyDown("space") && trex.y>=160){
    trex.velocityY = -13;
  }


  //gravity
  trex.velocityY = trex.velocityY + 1.0;
  
  //trex is colliding to the iGround
  trex.collide(iGround);

  //resetting the ground
  if(ground.x < 0){
    ground.x = ground.width/2;
  }

  drawSprites();

}
