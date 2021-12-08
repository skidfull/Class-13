var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud, cloudIMG
var cac1, cac2, cac3, cac4, cac5, cac6
var cac

var score;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");

  cloudIMG = loadImage("cloud.png")
  
  cac1 = loadImage("obstacle1.png")
  cac2 = loadImage("obstacle2.png")
  cac3 = loadImage("obstacle3.png")
  cac4 = loadImage("obstacle4.png")
  cac5 = loadImage("obstacle5.png")
  cac6 = loadImage("obstacle6.png")

}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;

  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //generate random numbers
  var rand =  Math.round(random(1,100))
  console.log(rand)

}

function draw() {
  //set background color
  background(180);
  
  console.log(trex.y)
  
  
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  //Spawn Clouds
  spawnClouds()
  
  cactus()

  drawSprites();

}

//function to spawn the clouds
function spawnClouds(){
 // write your code here 
 if(frameCount%60 === 0)
   {

 cloud = createSprite(600, 100, 5, 5)
 cloud.velocityX = -4
 cloud.y = Math.round(random(80, 120))
 cloud.addImage("cloud", cloudIMG)
 cloud.depth = trex.depth
 trex.depth = trex.depth +1
 cloud.scale = 0.7
 cloud.lifetime = 150

}

}

function cactus(){
  if(frameCount%60 === 0)
  {

    cac = createSprite(500, 160, 5, 5)
    cac.velocityX = -5
    var arr = Math.round(random(1, 6))
    switch(arr) {
      case 1: cac.addImage(cac1);
      break; 
      case 2: cac.addImage(cac2);
      break; 
      case 3: cac.addImage(cac3);
      break; 
      case 4: cac.addImage(cac4);
      break; 
      case 5: cac.addImage(cac5);
      break; 
      case 6: cac.addImage(cac6);
      break; 
      default:break;
      

    }
    cac.depth = trex.depth
      trex.depth = trex.depth +1
      cac.scale = 0.7
      cac.lifetime = 120
  }
}


