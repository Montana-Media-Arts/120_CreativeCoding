// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-2: noFill
function setup() {
  createCanvas(480, 270);
  // noFill() leaves the shape with only an outline.
  noFill();
  stroke(0);
}

function draw() {
  background(255);
  ellipse(60,60,100,100);
}