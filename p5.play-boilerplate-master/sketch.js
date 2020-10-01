var movingrect, fixedrect;
function setup() {
  createCanvas(2080,1080);
  movingrect = createSprite(600,400,80,30);
  movingrect.shapeColor = "green";
  fixedrect = createSprite(400,200,50,80);
  fixedrect.shapeColor = "green";
}

function draw() {
  background(0);  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

  if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 && 
    fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2 &&
    movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2 &&
    fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2) {
      fixedrect.shapeColor = "red";
      movingrect.shapeColor = "red";
  }
  else {
    fixedrect.shapeColor = "green";
    movingrect.shapeColor = "green";
  }
  drawSprites();
}