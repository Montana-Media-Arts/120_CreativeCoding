var dir = 1;
var speed = 5;
var d = 50;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  ellipse(width/2, height/2, d, d);

  d += dir * speed;
  if (d > 400 || d < 0) {
    dir = -dir;
  }
}