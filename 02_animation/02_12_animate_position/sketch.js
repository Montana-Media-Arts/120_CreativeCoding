// Example 2-12: animate position

var x = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  ellipse(x, height/2, 50, 50);

  x++;
  // x = x + 1; // this line is same as above
  // x = x + 5; // faster
}