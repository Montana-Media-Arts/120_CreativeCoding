let x = 300;
let y = 200;
let d = 50;
let g = 0;

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