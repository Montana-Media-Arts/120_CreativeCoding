// Example 2-6: map

function setup() {
  createCanvas(600, 400);
  fill(0, 102);
  noStroke();
}

function draw() {
  var g = map(mouseY, 0, height, 0, 255);
  background(g);

  var h = map(mouseX, 0, width, 0, 50);
  ellipse(300, 200, h, 50);
}