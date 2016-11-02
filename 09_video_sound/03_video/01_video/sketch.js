// Just play a video

// Is it playing?
var playing = false;

// Video
var fingers;

// Button
var button;

function setup() {
  noCanvas();

  // Create a video element
  fingers = createVideo('fingers.mov');

  // Create button and set callback
  button = createButton('play');
  button.mousePressed(toggleVid); // attach button listener
}

// Plays or pauses the video depending on current state
function toggleVid() {
  if (playing) {
    fingers.pause();
    button.html('play');
  } else {
    fingers.loop();
    button.html('pause');
  }
  playing = !playing;
}
