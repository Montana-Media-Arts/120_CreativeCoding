
// DEFINE GLOBAL VARIABLES
var bgColor;  // background-color

function setup() {
  bgColor = color(50,100,200);
  createCanvas(windowWidth,windowHeight);
  background(bgColor);
  // frameRate(12);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(bgColor);
}


// DEFINE GLOBAL VARIABLES
var centerX, centerY;
var pos1x = 100, pos1y = 100;
var pos2x = 200, pos2y = 200;
var pos3x = 0, pos3y = 0;
var multMax = 4;
var mult;
var redFill = 255;

function draw() {
  centerX = width * 0.5;
  centerY = height * 0.5;

  mult = random(-multMax, multMax);
  pos3x = abs(((width * 0.15 * mult) + centerX) % width);
  mult = random(-multMax, multMax);
  pos3y = abs(((height * 0.15 * mult) + centerY) % height);


  mult = noise(frameCount * 0.001) * 255;
  // mult = map( mult, 0, 1, -10, 10 );
  // redFill = constrain((redFill + mult), 0, 255);
  redFill = constrain(mult, 0, 255);

  // noStroke();
  stroke(200, 20);
  fill(redFill,255-redFill,175, 30);

  triangle(pos1x,pos1y,pos2x,pos2y,pos3x,pos3y);

  pos1x = pos2x;
  pos1y = pos2y;
  pos2x = pos3x;
  pos2y = pos3y;

  // ellipse(centerX, centerY, 40, 40);
}
