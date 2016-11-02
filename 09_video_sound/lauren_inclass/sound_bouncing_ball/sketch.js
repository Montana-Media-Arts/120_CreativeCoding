var mic;
var y;

function setup() {
  createCanvas(600, 400);
  y = height;
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0);
  var vol = mic.getLevel();
  y = map(vol, 0, 1, height, 0);
  ellipse(width/2, y-25, 50, 50);
}

