var x = 300;
var dir = 1;
var speed = 5;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  ellipse(x, height/2, 50, 50);

  x += dir * speed;
  if (x > width - 25 || x < 25) {
    dir = -dir;
  }
}