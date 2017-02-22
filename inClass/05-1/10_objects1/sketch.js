
// An object is a digital thing.
// It contains parameters, specific to that object instance.

// I am defining a singular instance of an object, and assigning to the name space 'myObject'
var myObject = {
  xPos: 30,
};

// define a parameter value within my object
myObject.param1 = 1;
myObject.param2 = "ANY STRING";
myObject.whatever = myObject.param1 + myObject.param2;

var textPos_X;
var textPos_Y;
function setup() {
  createCanvas(800,600);
  textPos_X = width * 0.5;
  textPos_Y = height * 0.5;

  frameRate(2);

}

function draw() {
  background(20, 30, 243);

  // display results
  textSize(36);
  fill(255);
  textAlign(CENTER);
  // text(typeof(myObject), textPos_X, textPos_Y);
  text(myObject.xPos, textPos_X, textPos_Y);


  // text("result = " + result, textPos_X, textPos_Y+40);
}
