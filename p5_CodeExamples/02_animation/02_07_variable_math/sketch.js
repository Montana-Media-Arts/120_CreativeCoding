// Getting Started with p5.js
// Lauren McCarthy, Casey Reas, Ben Fry

// Example 2-7: variable math

var x = 25;
var h = 20;
var y = 25;

function setup() {
  createCanvas(480, 120);
}

function draw() {
  rect(x, y, 300, h);        // top
  x = x + 100;
  rect(x, y + h, 300, h);    // middle
  x = x - 250;
  rect(x, y + h*2, 300, h);  // bottom
}