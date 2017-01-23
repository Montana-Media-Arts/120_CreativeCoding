// Example 2-11: random

function setup() {
  createCanvas(600, 400);
  frameRate(60);
  //frameRate(30);
  //frameRate(10);
  //frameRate(1);
}

function draw() {
  var x = random(width);
  var y = random(height);
  var g = random(255);
  
  background(255);
  fill(g);
  ellipse(x, y, 50, 50);
}