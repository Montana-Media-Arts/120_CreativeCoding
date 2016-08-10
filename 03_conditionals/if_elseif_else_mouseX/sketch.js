function setup() {
  createCanvas(600, 400);
}

function draw() {
  if (mouseX < width*0.33) {
    background(255, 0, 0);
  } else if (mouseX > width*0.66) {
    background(0, 255, 0);
  } else {
    background(0, 0, 255);
  }
}