var ship
var sea

function preload(){


seaImg = loadImage ("sea.png");
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);

  //create sea sprite
  sea =  createSprite(200,200,800,800); 
  sea.addImage("sea.png",seaImg);
  sea.scale = 0.5  
  sea.velocityx = -4;
  
  ship = createSprite(100,250,50,50);
  ship.addAnimation("ship",shipImg)
  ship.scale = 0.2
}

function draw() {
  background("blue");
  drawSprites();
}
