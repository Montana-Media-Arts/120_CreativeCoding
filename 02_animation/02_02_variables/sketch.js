// Getting Started with p5.js
// Lauren McCarthy, Casey Reas, Ben Fry

// Example 2-2: variables

var y = 60; // 100
var d = 80; // 130

function setup() {
  createCanvas(480, 120);
}

function draw() {
  ellipse(75, y, d, d);   // left
  ellipse(175, y, d, d);  // middle
  ellipse(275, y, d, d);  // right
}