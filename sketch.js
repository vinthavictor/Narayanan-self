var prince,princei;
var fireball,fireballi;
var chimney1,chimney1i;
var chimney2,chimney2i;
var chimney3,chimney3i;
var chimney4,chimney4i;
var target,targeti;
var waterball1,waterball1i;
var waterball2,waterball2i;
var waterball3,waterball3i;
var waterball4,waterball4i;
var invisible,ini;
var invisible2,ini2;
var invisible3,ini3;
var invisible4,ini4;
var waterballs;
var chimneys;
var fire,firei;
var lifecount=3;
var lifesprites;
var score;
var hearti;
var lifeSpritegrp;
var gameState="Play";
function preload(){
princei=loadImage("prince2.jpg");
fireballi=loadImage("fireball2.png");
chimney1i=loadImage("chim.jpg");
chimney2i=loadImage("chim2.jpg");
chimney3i=loadImage("chim.jpg");
chimney4i=loadImage("chim2.jpg");
targeti=loadImage("candlee.jpg");
waterball1i=loadImage("waterball22.jpg");
waterball2i=loadImage("waterball11.jpg");
waterball3i=loadImage("waterball22.jpg");
waterball4i=loadImage("waterball11.jpg");
ini=loadImage("invisibleprince.jpg");
ini2=loadImage("invisibleprince.jpg");
ini3=loadImage("invisibleprince.jpg");
ini4=loadImage("invisibleprince.jpg");
firei=loadImage("flameedited.jpg");
hearti=loadImage("heart.jpg");
}
function setup(){
createCanvas(1900,800);
background("black");
score=0
prince=createSprite(132,330,50,50);
prince.addImage(princei);
prince.scale=0.3;
lifeSpritegrp=new Group();
invisible=createSprite(639,330,50,50);
invisible.addImage(ini);
invisible.scale=1;

invisible2=createSprite(900,330,50,50);
invisible2.addImage(ini2);
invisible2.scale=1;

invisible3=createSprite(1200,330,50,50);
 invisible3.addImage(ini3);

invisible3.scale=1;

invisible4=createSprite(1900,330,50,50);
invisible4.addImage(ini4);
invisible4.scale=1;

target=createSprite(1370,350,50,50);
target.addImage(targeti);
target.scale=0.5;

fireball=createSprite(40,262,50,50);
 fireball.addImage(fireballi);
fireball.scale=0.2;


waterball1=createSprite(520,10,50,50);
 waterball1.addImage(waterball1i);
waterball1.scale=0.5;
waterball1.velocityY=6;


waterball2=createSprite(570,670,50,50);
 waterball2.addImage(waterball2i);
waterball2.scale=0.5;
waterball2.velocityY=-5;


waterball3=createSprite(900,10,50,50);
 waterball3.addImage(waterball3i);
waterball3.scale=0.5;
waterball3.velocityY=6;

waterball4=createSprite(950,690,50,50);
 waterball4.addImage(waterball4i);
waterball4.scale=0.5;
waterball4.velocityY=-5;

chimney1=createSprite(540,72,50,50);
 chimney1.addImage(chimney1i);
chimney1.scale=0.5;



chimney2=createSprite(540,730,50,50);
 chimney2.addImage(chimney2i);
chimney2.scale=0.5;

chimney3=createSprite(920,69,50,50);
chimney3.addImage(chimney3i);
chimney3.scale=0.5;

chimney4=createSprite(930,730,50,50);
chimney4.addImage(chimney4i);
chimney4.scale=0.5;



}
function draw(){
 
  if(gameState==="Play"){

    background("white");
 var x=70;
 console.log(lifecount)
for(var i=1;i<=lifecount;i++){
  lifesprites=createSprite(x,120,10,10);
  x=x+50
  lifesprites.addImage(hearti)
  lifesprites.scale=0.2
  lifeSpritegrp.add(lifesprites);
}
  
if(fireball.isTouching(waterball1)||fireball.isTouching(waterball2)||fireball.isTouching(waterball3)||fireball.isTouching(waterball4)||score===3){
  prince.destroy();
chimney1.destroy();
chimney2.destroy();
chimney3.destroy();
chimney4.destroy();
fireball.destroy();
target.destroy(); 
waterball1.destroy();
waterball2.destroy();
waterball3.destroy();
waterball4.destroy();
invisible.destroy();
lifeSpritegrp.destroyEach();


gameSate="end";
}

if(keyDown(RIGHT_ARROW)&&fireball){
  fireball.x=fireball.x+20;
}
if(keyDown(UP_ARROW)){
  fireball.y=fireball.y-10;
}
if(keyDown(DOWN_ARROW)){
  fireball.y=fireball.y+10;
}
if(waterball1.y>720){
  waterball1.y=10;
}
if(waterball2.y<69){
  waterball2.y=670;
}
if(waterball3.y>720){
  waterball3.y=10;
}
if(waterball4.y<69){
  waterball4.y=670;
}
if(fireball.x===1380){
fire=createSprite(1370,240);
fire.addImage(firei)
fire.visible=true;
fire.scale=0.3;
score=score+1;
}
// if(fireball.isTouching(target)){
// console.log(lifecount)
// }
if(fireball.x===1500){
  fireball.x=40;
  lifecount=lifecount-1;
  lifeSpritegrp.destroyEach();
  fire.visible=false;
}
fill("red")
textSize(30)
  text("Score:"+score,80,62);
  drawSprites();
}
if(gameState==="end"){
  end();
  background("white");
}
}
function end(){
  fill("black");
  textSize(30);
  text("OOPS!!! sorry prince you failed to win the test. But its ok, if you win the next level you can marry the princess",width/2,height-30)
}