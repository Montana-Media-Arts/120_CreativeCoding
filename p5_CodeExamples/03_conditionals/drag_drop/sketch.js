var x = 200;
var y = 200;
var diameter = 5;

// this variable keeps track of whether circle should drag or not
var dragging = false;

function setup() {
  createCanvas(400, 400);
  fill(0);
}

function draw() {
  background(255);
  
  // if in dragging state, update x and y to follow mouse
  if (dragging) {
    x = mouseX;
    y = mouseY;
  }
  
  // draw the ellipse at x,y position
  ellipse(x, y, diameter, diameter);
}

// when mouse is pressed, check if click is inside circle
// if it is, set dragging state to true
function mousePressed() {
  if (dist(x, y, mouseX, mouseY) < diameter/2) {
    dragging = true;
  }
}

// whenever mouse is released, return draging state to false
function mouseReleased() {
  dragging = false;
}