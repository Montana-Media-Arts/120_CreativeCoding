var textPos_X;
var textPos_Y;
function setup() {
  createCanvas(800,600);
  textPos_X = width * 0.5;
  textPos_Y = height * 0.5;

  frameRate(2);

}


var x, result;
function draw() {
  background(20, 30, 243);

  // random number generator
  // Returns floats between min and max
  // Possible values are inclusive of min and exlusive of max [0, 1)
  // This means, we can get 0, but cannot get 1.
  // x = random(0,1);
  x = random(0,100);
  x = floor(x);

  // display math results
  textSize(36);
  fill(255);
  textAlign(CENTER);
  text("x = " + x, textPos_X, textPos_Y);
  // text("result = " + result, textPos_X, textPos_Y+40);
}
