var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  //for Y position;
  //fixedRect = createSprite(400, 100, 50, 80);
  //movingRect = createSprite(400, 400,80,50);
  //movingRect.velocityY = -5;
  //fixedRect.velocityY  = +5;
  
  
  //this is for X position bounce action
  
  fixedRect = createSprite(300, 400, 50, 80);
  movingRect = createSprite(600, 400,80,50);
  movingRect.velocityX = -5;
  fixedRect.velocityX  = +5;
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  
  movingRect.shapeColor = "green";
  movingRect.debug = true;

 
}

function draw() {
  background(0,0,0);  

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
  
  drawSprites();
}