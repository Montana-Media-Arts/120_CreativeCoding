// Rollover Rect
// Lauren McCarthy <http://lauren-mccarthy.com>

var x = 250;
var y = 150;
var s = 100;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200);
  if ((mouseX > x) && (mouseX < x + s) && (mouseY > y) && (mouseY < y + s)) {
    fill(0);
  } else {
    fill(255);
  }
  rect(x, y, s, s);
}