// ICM 2015
// DOM Manipulation
// https://github.com/ITPNYU/ICM-2015

// These are adapted from https://github.com/lmccart/itp-creative-js

function setup() {

  // In addition to making a canvas we can make other DOM elements
  // Like here is a paragraph element: <p>This is a paragraph element.</p>
  // By default these elements are appended to the <body>
  // Try reversing these two lines of code and see the difference
  var text = createP("This is a paragraph element.");
  var canvas = createCanvas(300, 200);

}

// A simple animation
function draw() {
  background(51);
  stroke(255);
  line(frameCount % width, 0, frameCount % width, height);
}
