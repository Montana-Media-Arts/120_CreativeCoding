function setup() {
  createCanvas(600, 400);
}

function draw() {
  if (mouseX > width/2) {
    background(0);
  } else {
    background(255);
  }
}