// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 20-3: Manipulating sound 

// A sound file object
var song;

var speedSlider;
var volumeSlider;

function preload() {
  song = loadSound("sounds/beat.mp3");  
}

function setup() {
  noCanvas();

  // Loop the sound forever
  // (well, at least until stop() is called)
  song.loop();

  speedSlider = createSlider(0.5, 4, 1, 0.1);
  speedSlider.parent('rate');
  volumeSlider = createSlider(0, 1, 0.5, 0.01);
  volumeSlider.parent('volume');

}

function draw() {
  background(200);

  song.amp(volumeSlider.value());
  song.rate(speedSlider.value());
}