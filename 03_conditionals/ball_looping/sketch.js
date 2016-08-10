var x = 0;
var speed = 1;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  ellipse(x, height/2, 50, 50);

  x += speed;
  if (x > width + 25) {
    x = -25;
  }
}