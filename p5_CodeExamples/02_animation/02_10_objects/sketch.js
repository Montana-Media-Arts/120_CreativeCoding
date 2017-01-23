// Example 2-10: objects

var ages = { kate: 20, max: 89, kai: 55 };

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  rect(width/4, 0, 30, ages.kate);
  rect(2*width/4, 0, 30, ages.max);
  rect(3*width/4, 0, 30, ages.kai);
}