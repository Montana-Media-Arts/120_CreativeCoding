
var result;
var textPos_X;
var textPos_Y;
function setup() {
  createCanvas(800,600);
  textPos_X = width * 0.5;
  textPos_Y = height * 0.5;

  frameRate(2);

}


result = 0;

function draw() {
  background(40, 70, 245);

  // DO SOME MATH

  // result--;
  result -= 20;

  // display math results
  textSize(36);
  fill(255);
  text(result, textPos_X, textPos_Y);

}
