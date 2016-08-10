// Getting Started with p5.js
// Lauren McCarthy, Casey Reas, Ben Fry

function setup() {
  createCanvas(600, 400);
  strokeWeight(30);
}

function draw() {
  background(204);
  stroke(102);
  line(140, 0, 170, height);
  if (mouseIsPressed) {
    stroke(0);
  } else {
    stroke(255);
  }
  line(0, 170, width, 150);
}