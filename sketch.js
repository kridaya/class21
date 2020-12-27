var fixedRect, movingRect;
var game1,game2;
var game3;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 // fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;

  game1=createSprite(200,100,50,30);
  game1.shapeColor = "green";

  game2=createSprite(300,200,80,30);
  game2.shapeColor = "blue";
  game2.velocityY=5;
  game3=createSprite(300,500,80,30);
  game3.shapeColor = "blue";
  game3.velocityY= -5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

     if(isTouching(movingRect,game1)){
      movingRect.shapeColor = "red";
      game1.shapeColor = "red";
    }
    else {
      movingRect.shapeColor = "green";
      game2.shapeColor = "green";
    } 
     bounceOff(game1,game2);
  drawSprites();
  }
