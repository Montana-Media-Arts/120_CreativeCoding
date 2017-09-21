
var textPos_X;
var textPos_Y;
function setup() {
  createCanvas(800,600);
  textPos_X = width * 0.5;
  textPos_Y = height * 0.5;

  frameRate(20);

}

var x = 0;
var xPos = x;


function draw() {
  background(40, 70, 245);


  ellipse(xPos,textPos_Y-40,20,20);

  x += 10;
  xPos = x % width;

  // display math results
  textSize(36);
  textAlign(CENTER);
  fill(255);
  text("raw x: " + x, textPos_X, textPos_Y);
  text("ball x position: " + xPos, textPos_X, textPos_Y+40);

}
