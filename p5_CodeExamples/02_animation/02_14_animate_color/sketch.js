// Example 2-14: animate color

var r = 0;

function setup() {
  createCanvas(600, 400);
  noStroke();
}

function draw() {
  background(250, 250, 0);
  fill(r, 0, 0);
  ellipse(width/2, height/2, 100, 100);

  // Increment variable r
  r++;
}