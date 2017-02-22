
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

  // Absolute Value
  // x--;
  // result = abs(x);

  /* ROUNDING FUNCTIONS ARE USEFUL!!!! */
  // They can be used to gaurentee integer values.
  // Ceil or Ceiling is a rounding function
  // This function always rounds up to the nearest int
  // x += 0.01;
  // result = ceil( x );
  // Floor does the opposite
  // result = floor( x );
  // Round is what you think
  // result = round( x );


  /* CONSTRAIN */
  // This can be used to setup boundaries of functions.
  // x = mouseX;
  // result = constrain(x, 20, 40);

  /* POWER */
  x++;
  // result = sq(x);
  // result = pow(2, x);
  result = sqrt(x);


  // display math results
  textSize(36);
  fill(255);
  textAlign(CENTER);
  text("x = " + x, textPos_X, textPos_Y);
  text("result = " + result, textPos_X, textPos_Y+40);

}
