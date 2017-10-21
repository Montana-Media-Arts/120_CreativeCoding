var x = 300;
var y = 200;
var d = 50;
var state = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  if (state) {
    background(0);
  } else {
    background(255);
  }
  ellipse(x, y, d, d);
}

function mousePressed() {
  if (dist(mouseX, mouseY, x, y) < d/2) {
    state = !state;
  }
}