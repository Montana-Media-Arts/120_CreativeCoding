// Getting Started with p5.js
// Lauren McCarthy, Casey Reas, Ben Fry

function setup() {
  createCanvas(480, 240);
  strokeWeight(2);
}

function draw() {
  background(200);
  for (var i = 20; i < 400; i += 20) {
    line(i, 0, 1.5*i, 120);
  }
}