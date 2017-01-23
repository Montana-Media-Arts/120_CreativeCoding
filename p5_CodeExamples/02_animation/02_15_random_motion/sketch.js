// Example 2-15: random motion

var x = 300;
var y = 200;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  //background(255);
  ellipse(x, y, 50, 50);

  // change x and y by a small random amount each frame
  x = x + random(-2, 2);
  y = y + random(-2, 2);
}