// ICM 2015
// DOM Manipulation
// https://github.com/ITPNYU/ICM-2015

function setup() {
  // Here we can store a reference to the canvas DOM element
  var canvas = createCanvas(600, 400);
  // And do things like give it an absolute position on the page
  canvas.position(50, 50);
}

// A simple animation
function draw() {
  background(51);
  stroke(255);
  line(frameCount % width, 0, frameCount % width, height);
}