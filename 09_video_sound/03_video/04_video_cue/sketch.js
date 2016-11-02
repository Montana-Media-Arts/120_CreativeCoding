
// Video and button
var fingers;
var button;

// Dom element to show time in video
var time;


function setup() {
  createCanvas(100, 100);
  background(0);

  // DOM element to show time in video
  time = createP('0');

  // Start the video
  fingers = createVideo('fingers.mov');
  fingers.play();

  // Add a cue at 2 seconds to change background
  fingers.addCue(2, changeBackground);

  // Add two cues, notice how the third argument gets passed to the callback showText
  fingers.addCue(4, showText, "hello at 4 seconds");
  fingers.addCue(6.5, showText, "hello again at 6.5 seconds");

}

// Update the HTML element
function draw() {
  time.html(fingers.time());
}

// A callback to change background
function changeBackground() {
  background(255, 0, 175);
}

// A callback to show some text
function showText(txt) {
  createP(txt);
}

