var fixedRect, movingRect;
var game, console;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = false;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;
  game = createSprite(200,200,20,20);
  console = createSprite(300,300,20,20);

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  game.x = mouseX;
  game.y = mouseY;
  if(isTouching(game, console)) {
    game.shapeColor = "blue";
    console.shapeColor = "pink";
  }
  else {
    game.shapeColor = "red";
    console.shapeColor = "red";
  }
  bounceOff(movingRect, fixedRect);
  drawSprites();
}