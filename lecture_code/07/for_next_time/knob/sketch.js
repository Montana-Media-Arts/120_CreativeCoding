// Complicated Knob
// Daniel Shiffman <http://www.shiffman.net>

let dragging = false; // Is the slider being dragged?
let rollover = false; // Is the mouse over the slider?

// Circle variables for knob
let x = 160;
let y = 180;
let r = 40;

// Knob angle
let angle = 0;

// Offset angle for turning knob
let offsetAngle = 0;

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(255);


  // Is it being dragged?
  if (dragging) {
    let dx = mouseX - x;
    let dy = mouseY - y;
    let mouseAngle = atan2(dy, dx);
    angle = mouseAngle - offsetAngle;
  }

  // Fill according to state
  if (dragging) {
    fill (175);
  } 
  else {
    fill(255);
  }
  // Draw ellipse for knob
  push();
  translate(x, y);
  rotate(angle);
  ellipse(0, 0, r*2, r*2);
  line(0, 0, r, 0);
  pop();
  fill(0);


  // Map is an amazing function that will map one range to another!
  // Here we take the slider's range and map it to a value between 0 and 255
  // Our angle is either between
  let calcAngle = 0; 
  if (angle < 0) {
    calcAngle = map(angle, -PI, 0, PI, 0);
  } 
  else if (angle > 0) {
    calcAngle = map(angle, 0, PI, TWO_PI, PI);
  }

  textAlign(CENTER);
  text(int(degrees(calcAngle)), x, y+r+20);

  let b = map(calcAngle, 0, TWO_PI, 0, 255);
  fill(b);
  rect(320, 90, 160, 180);
}

function mousePressed() {
  // Did I click on slider?
  if (dist(mouseX, mouseY, x, y) < r) {
    dragging = true;
    // If so, keep track of relative location of click to corner of rectangle
    let dx = mouseX - x;
    let dy = mouseY - y;
    offsetAngle = atan2(dy, dx) - angle;
  }
}

function mouseReleased() {
  // Stop dragging
  dragging = false;
}