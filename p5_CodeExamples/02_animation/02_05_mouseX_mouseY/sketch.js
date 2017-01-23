// Example 2-5: mouseX and mouseY

function setup() {
  createCanvas(600, 400);
  fill(0, 102);
  noStroke();
}

function draw() {
  background(mouseY); // background color changes based on mouseY
  ellipse(300, 200, mouseX, 50); // width changes based on mouseX
  ellipse(mouseX, mouseY, 10, 10); // ellipse follows mouse
}