// Example 2-13: animate size

var d = 10;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  ellipse(width/2, height/2, d, d);

  // Increment variable d
  d++;
}