// Getting Started with p5.js
// Lauren McCarthy, Casey Reas, Ben Fry

// Example 2-4: windowWidth and windowHeight variables

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  line(0, 0, width, height);  // line from (0,0) to (480, 120)
  line(width, 0, 0, height);  // line from (480, 0) to (0, 120)
  ellipse(width/2, height/2, 60, 60);
}