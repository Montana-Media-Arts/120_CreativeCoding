function setup() {
  createCanvas(600, 200);
}

function draw() {
  background(0);
  for (var y = 0; y <= height; y += 10) {
    for (var x = 0; x <= width; x += 10) {
      var d = y/10;
      ellipse(x + y, y, d, d);
    }
  }
}