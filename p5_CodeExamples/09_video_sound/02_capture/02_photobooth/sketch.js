// Video snapshot

var video;

function setup() {

  // Make a canvas
  var canvas = createCanvas(320, 240);
  background(0);
  canvas.parent('video');

  // Make a video elements
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.parent('video');

  // Make a button
  var button = createButton('snap');
  button.parent('button');
  // When you click the button
  button.mousePressed(snap);
}

// Copy a snapshot of the video onto the canvas
function snap() {
  image(video, 0, 0, width, height);
}

