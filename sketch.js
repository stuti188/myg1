var backgroundimg,backgroundsprite


function preload ()
{
backgroundimg=loadImage("assets/bg.png");
balloonimg=loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png");
}
function setup()
{
  createCanvas(800,800);

  
backgroundsprite = createSprite(400,400,200,220);
backgroundsprite.addImage(backgroundimg);
balloon = createSprite(100,200,50,50);
balloon.addAnimation("balloonn",balloonimg);
balloon.scale=0.5;



}
function draw()
{
background("white");
drawSprites();
if(keyDown(UP_ARROW)){
  balloon.velocityY=-5;
}
balloon.velocityY=balloon.velocityY+0.3;
}