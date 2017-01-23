// ICM 2015
// DOM Manipulation
// https://github.com/ITPNYU/ICM-2015

var c;

function setup() {
  // create canvas, store a pointer to it in c
  c = createCanvas(600, 400);
  // position canvas in middle of screen
  c.position(windowWidth/2-width/2, windowHeight/2-height/2);
}

function draw() {
  // draw some stuff
  background(127);
  noStroke();
  for (var i = 0; i < height; i += 20) {
    fill(129, 206, 15);
    rect(0, i, width, 10);
    fill(255);
    rect(i, 0, 10, height);
  }
}

// this is called automatically on window resize
function windowResized() {
  // position canvas in middle of screen
  c.position(windowWidth/2-width/2, windowHeight/2-height/2);
}