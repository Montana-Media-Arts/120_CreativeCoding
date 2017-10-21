// Getting Started with p5.js
// Lauren McCarthy, Casey Reas, Ben Fry

function setup() {
  createCanvas(600, 400);
  strokeWeight(8);
}

function draw() {
  background(200);
  for (var i = 20; i < 400; i += 60) { // try changing "60" to other numbers
    line(i, 40, i + 60, 80);
  }
}

// above is equivalent to

// function draw() {
//   line(20, 40, 80, 80);
//   line(80, 40, 140, 80);
//   line(140, 40, 200, 80);
//   line(200, 40, 260, 80);
//   line(260, 40, 320, 80);
//   line(320, 40, 380, 80);
//   line(380, 40, 440, 80);
// }