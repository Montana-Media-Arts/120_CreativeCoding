// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 20-5: Manipulating sound

// A sound file object
var song;
var reverb;

function preload() {
  song = loadSound("sounds/doorbell.mp3");
}

function setup() {
  noCanvas();
  createP('Listen to the reverb!');

  // song.disconnect();

  reverb = new p5.Reverb();
  // Connect soundFile to reverb, process w/
  // 3 second reverbTime, decayRate of 2%
  reverb.process(song, 6, 2, true);



  // Loop the sound forever
  // (well, at least until stop() is called)
  song.loop();

}
