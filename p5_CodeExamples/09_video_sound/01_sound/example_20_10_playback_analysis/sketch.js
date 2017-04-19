// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 20-10: Amplitude analysis

// A Sample object (for a sound)
var song;

var amplitude;
var amplitude2;

var mic;

function preload() {
  song = loadSound("sounds/beat.mp3");
}


function setup() {
  createCanvas(480, 270);
  song.loop();
  // song.play();

  // create a new Amplitude analyzer
  amplitude = new p5.Amplitude();
  amplitude2 = new p5.Amplitude();


  mic = new p5.AudioIn();
  mic.start();
  amplitude.setInput(mic);
  amplitude2.setInput(song);

}

function draw() {
  background(200);

  // Get the overall volume (between 0 and 1.0)
  var vol = amplitude.getLevel();
  var vol2 = amplitude2.getLevel();
  fill(0, map(vol2, 0, 0.5, 0, 255), map(vol, 0, 0.5, 255, 0));
  stroke(0);

  vol = map(vol, 0, 1, 300, 0);

  // Draw an ellipse with size based on volume
  ellipse(width/2, height/2, vol, vol);
}
