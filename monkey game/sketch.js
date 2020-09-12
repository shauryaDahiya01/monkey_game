
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survivalTime
var high=0
var PLAY=1
var END=0
var point=0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
}



function setup() {
  createCanvas(600, 200);
  
 monkey = createSprite(50,160,20,50);
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(300,195,800,10)
  ground.velocityX=-4
  
  invisibleGround = createSprite(300,195,800,10);
  invisibleGround.visible = false;
  
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  monkey.debug = true
  
  survivalTime=0
  point=0
  obstacleGroup=createGroup()
  bananaGroup=createGroup()
}


function draw() {
  
  background("white")
stroke("Black")
textSize("20")
fill("black")
survivalTime=Math.ceil(frameCount/ frameRate ())
text("Survival Time: " +survivalTime,470,20)

   if (ground.x < 200){
      ground.x = ground.width/2;
   }
 
  monkey.collide(invisibleGround);
  
   monkey.velocityY = monkey.velocityY + 0.8
  
     if(keyDown("space")&& monkey.y >= 100) {
       monkey.velocityY = -12;
      
    }
  
  if(monkey.isTouching(bananaGroup)){     
 point =point+1;
    
      bananaGroup.destroyEach();    
     }
 
textSize("20")
text("POINT : " + point,10,20)
  
  if(obstacleGroup.isTouching(monkey)){
  
      ground.velocityX = 0;
      monkey.velocityX = 0
    
     
   obstacleGroup.setLifetimeEach(-1);
   bananaGroup.setLifetimeEach(-1);
     
     obstacleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);    
    
   if(obstacleGroup.isTouching(monkey)){
   
   survivalTime=0
   
   
   }
    
    
    
   }
  
  
  
  
  
  
  
  
  

 
  drawSprites()
  banana()
  obstacle ()
}

function banana(){

  
  if (frameCount % 360=== 0) {
    var banana = createSprite(600,30,10,10);
   
    banana.addImage(bananaImage);
   banana.scale = 0.5;
    banana.velocityX = -4;
   banana.lifetime = 200; 
    banana.scale=0.1
    bananaGroup.add(banana);
  }  
}
function obstacle (){
if (frameCount % 120 === 0){
 var obstacle = createSprite(600,173,10,40);
 obstacle.addImage(obstaceImage)
 obstacle.velocityX=-4
 obstacle.scale=0.1
 obstacleGroup.add(obstacle)
}

 
}











