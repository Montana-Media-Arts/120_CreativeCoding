var x = 300;
var y = 200;
var d = 50;
var g = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(g);
  ellipse(x, y, d, d);
}

function mousePressed() {
  if (dist(mouseX, mouseY, x, y) < d/2) {
    g += 30;
  }
}