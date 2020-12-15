var movingrect,fixedrect;




function setup() {
  createCanvas(800,800);
  movingrect= createSprite(400, 200, 50, 80);
  fixedrect= createSprite(600, 200, 80, 50);
  movingrect.shapeColor="blue";
  fixedrect.shapeColor="blue";
}

function draw() {
  background(0); 
 movingrect.x=mouseX;
 movingrect.y=mouseY;
  if (fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 && 
      movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 &&
      fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2 &&
      movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2  ) {
    
        movingrect.shapeColor="red";
        fixedrect.shapeColor="red";
  }
  else{
    movingrect.shapeColor="blue";
    fixedrect.shapeColor="blue";
  }

  drawSprites();
}