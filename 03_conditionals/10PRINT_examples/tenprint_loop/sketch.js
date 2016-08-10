function setup() {
  createCanvas(800, 800);
  background(255);
}

function draw() {
  for (var y = 0; y < height; y += 20) {
    for (var x = 0; x < width; x += 20) {
      if (random(1) > 0.5) {
        line(x, y, x+20, y+20);
      } else {
        line(x, y+20, x+20, y);
      }
    }
  }
  
  noLoop();
}