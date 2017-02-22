
var textPos_X;
var textPos_Y;
function setup() {
  createCanvas(800,600);
  textPos_X = width * 0.5;
  textPos_Y = height * 0.5;

  frameRate(20);

}


var result = 200;
var x = 0;


function draw() {
  background(40, 70, 245);

  // DO SOME MATH

  // Modulo is the remiander of long division.
  // This is signified with the '%' operator.
  x++;
  x = x % 100;

  result = x;


  // display math results
  textSize(36);
  fill(255);
  text(result, textPos_X, textPos_Y);

}
