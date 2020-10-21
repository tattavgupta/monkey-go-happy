
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var ground
var survivalTime=0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500);
  ground=createSprite(400,450,1000,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  monkey=createSprite(80,415,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  FoodGroup=createGroup()
  obstacleGroup=createGroup()
}


function draw() {
  background(220);
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyWentDown("space")&&monkey.y>170){
    monkey.velocityY=-15;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  food()
  stone()
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime,100,50);
  drawSprites()
}

function food() {
  if(frameCount%80==0){
   banana=createSprite(500,500,20,20);
   banana.y=Math.round(random(120,200));
   banana.addImage("eat",bananaImage);
   banana.velocityX=-4;
   banana.lifetime=125;
   banana.scale=0.07;
   FoodGroup.add(banana);
  }
}

function stone(){
   if(frameCount%300==0){
    obstacle=createSprite(500,415,20,20);
    obstacle.addImage("death",obstacleImage);
    obstacle.velocityX=-4;
    obstacle.lifetime=140;
    obstacle.scale=0.2;
    obstacleGroup.add(obstacle);
  }
}


