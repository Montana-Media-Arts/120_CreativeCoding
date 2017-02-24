
// DEFINE GLOBAL VARIABLES
var bgColor;  // background-color

function setup() {
  bgColor = color(50,100,200);
  createCanvas(windowWidth,windowHeight);
  background(bgColor);
  // frameRate(20);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(bgColor);
}

function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    var fs = fullscreen();
    fullscreen(!fs);
  }
}

// DEFINE GLOBAL VARIABLES
var centerX, centerY;
var pos1x = 100, pos1y = 100;
var pos2x = 200, pos2y = 200;
var pos3x = 0, pos3y = 0;
var multMax = 0.01;
var multDelta;
var mult;
var redFill = 255;
var alphaAmt = 40;
var alphaNoise;

function draw() {

  centerX = width * 0.5;
  centerY = height * 0.5;

  multDelta = noise(0.01 * frameCount + pow(2, 8));
  multDelta = map(multDelta, 0, 1, -0.0001, 0.0001 );
  multMax = constrain(multMax + multDelta, 0.005, 0.2);
  mult = random(-multMax, multMax);
  pos3x = abs(((width * mult) + pos2x) % width);
  mult = random(-multMax, multMax);
  pos3y = abs(((height * mult) + pos2y) % height);


  mult = noise(frameCount * 0.001) * 255;
  // mult = map( mult, 0, 1, -10, 10 );
  // redFill = constrain((redFill + mult), 0, 255);
  redFill = constrain(mult, 0, 255);

  noStroke();
  // stroke(200, 20);
  // get a random noise value between (0-1)
  alphaNoise = noise(0.1 * frameCount + 1000);
  alphaNoise = map(alphaNoise, 0, 1, -2, 2);
  alphaAmt += alphaNoise;
  alphaAmt = constrain(alphaAmt, 20, 100);
  fill(redFill,255-redFill,175, 30);

  triangle(pos1x,pos1y,pos2x,pos2y,pos3x,pos3y);

  pos1x = pos2x;
  pos1y = pos2y;
  pos2x = pos3x;
  pos2y = pos3y;

  //////// DEBUGGING STUFF /////////////
  // ellipse(centerX, centerY, 40, 40);
  push();
  translate(10, height - 40);
  fill(255);
  rect(0,0,150,25);
  fill(0);
  text(frameRate(), 5, 20);
  pop();
}
