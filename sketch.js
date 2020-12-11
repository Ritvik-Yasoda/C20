var a,b;
function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 50);
  a.shapeColor = "green";
  b = createSprite(200,200,200,50,80);
  b.shapeColor = "green";
}

function draw() {
  background(255,255,255);
  a.x = mouseX;
  a.y = mouseY;
  console.log(a.y-b.y) 
  if(a.x-b.x<118 &&b.x-a.x<118 & a.y-b.y<45 && b.y-a.y<45){
a.shapeColor = "red";
b.shapeColor = "red";
  }
  else{
    a.shapeColor = "green";
    b.shapeColor = "green";
  }
   
  drawSprites();
}
