
var textPos_X;
var textPos_Y;
function setup() {
  createCanvas(800,600);
  textPos_X = width * 0.5;
  textPos_Y = height * 0.5;

  frameRate(2);

}


var result = 0.34;
// var denom = 0;

function draw() {
  background(40, 70, 245);

  // DO SOME MATH
  // This does not work!!!!!!
  result = result / denom;
  

  // display math results
  textSize(36);
  fill(255);
  text(result, textPos_X, textPos_Y);

}
