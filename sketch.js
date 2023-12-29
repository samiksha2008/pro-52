var path,pathImg;
var penguin,penguinImg;
var polar,polarImg;
var ice,iceImg;
var starfish,starfishImg;
var plant,plantImg;
var seahorse,seahorseImg;
var ob,plan,star,sea,ic;
var PLAY=1;
var END=0;
var gameState=1;
var gameOverImg;
var restartImg;
var distance=0;




function preload(){
    pathImg=loadImage("space1.png");
    penguinImg=loadImage("alein.png");
    polarImg=loadImage("o.png");
    iceImg=loadImage("ss.png");
    starfishImg=loadImage("the.png");
    plantImg=loadImage("uu.png");
    seahorseImg=loadImage("pp.png");
    gameOverImg=loadImage("gameOver.png");
    restartImg=loadImage("restart.png");
    

 

}

function setup() {
    createCanvas(400,400);

    path=createSprite(200,200);
    path.addImage(pathImg)
    path.scale=0.5;
    path.velocityX=-5;


penguin=createSprite(70,150);
penguin.addImage("penguinRunning",penguinImg);
penguin.scale=0.05;
penguin.setCollider("rectangle",0,0,40,40);
   

ob = new Group();
plan = new Group();
sea= new Group();
star=new Group();
ic=new Group();

gameOver = createSprite(width/2,height/2-50);
gameOver.addImage(gameOverImg);
gameOver.scale = 0.5;
gameOver.visible=false;

restart = createSprite(width/2,height/2);
restart.addImage(restartImg)
restart.scale = 0.05;
restart.visible=false;

    
 
}

function draw() {
 
  
    
    if(gameState===PLAY){
        background(0);
        

        distance = distance + Math.round(getFrameRate()/50);
   path.velocityX = -(6 + 2*distance/150);
        if(path.x < 0 ){
            path.x = width/2;
          }
        

          penguin.y = World.mouseY;
          Obstacles();
          Plant();
          SeaHorse();
          StarFish();
          Ice();

  if(ob.isTouching(penguin) ) { 

    gameState = END;}
  

    if( plan.isTouching(penguin) ){
      
      gameState = END}
    

     if( ic.isTouching(penguin) ){
    
       gameState = END}
     

     if( sea.isTouching(penguin)){
    
       gameState = END}


    if(star.isTouching(penguin)){
    
       gameState = END} }


  else if (gameState === END) {
    
    path.velocityX=0;
    penguin.visible = false;

    ob.destroyEach();
    sea.destroyEach();
   star.destroyEach();
    ic.destroyEach();
    plan.destroyEach();
    
    ob.setVelocityYEach(0);
    plan.setVelocityYEach(0);
    ic.setVelocityYEach(0);
    sea.setVelocityYEach(0);
   star.setVelocityYEach(0);
   gameOver.visible=true;
   restart.visible=true;

     if(mousePressedOver(restart)) {
      reset();
      }
    }
    textSize(20);
  fill(255);
  text("Distance: "+ distance,200,20);
    drawSprites();
   
 
  }


  function reset(){
    gameState = PLAY;
    gameOver.visible = false; 
    restart.visible = false;
    penguin.visible = true;
    distance = 0;
   }

   
function Obstacles(){
 if (World.frameCount % 200 == 0) {
 polar = createSprite(600,Math.round(random(50,250)));
 polar.scale=0.2;
 polar.addImage("polar",polarImg)
 polar.velocityX=-3;
 polar.velocityX = -(6 + 2*distance/150);
 polar.setLifetime=130;
ob.add(polar);}

}

function Ice(){
 if (World.frameCount % 320 == 0) {
 ice=createSprite(600,Math.round(random(50,250)));
 ice.addImage("ice",iceImg);
 ice.velocityX = -(6 + 2*distance/150);
 ice.velocityX=-3;
 ice.scale=0.5;
 ice.setLifetime=130;
ic.add(ice)}

}

function StarFish(){
    if (World.frameCount % 410 == 0) {
    starfish=createSprite(600,Math.round(random(50,250)));
    starfish.addImage("star",starfishImg);
    starfish.velocityX=-3;
    starfish.velocityX = -(6 + 2*distance/150);
    starfish.scale=0.5;
    starfish.setLifetime=130;
    star.add(starfish)}
   }

   function Plant(){
    if (World.frameCount % 530 == 0) {
    plant=createSprite(600,Math.round(random(50,250)));
    plant.addImage("plant",plantImg);
    plant.velocityX=-3;
    plant.velocityX = -(6 + 2*distance/150);
    plant.scale=0.5;
    plant.setLifetime=130;
    plan.add(plant)}
   }

   function SeaHorse(){
    if (World.frameCount % 600 == 0) {
    seahorse=createSprite(600,Math.round(random(50,250)));
    seahorse.addImage("seahorse",seahorseImg);
    seahorse.velocityX=-3;
    seahorse.velocityX = -(6 + 2*distance/150);
    seahorse.scale=0.5;
    seahorse.setLifetime=130;
    sea.add(seahorse);}
   }

   
