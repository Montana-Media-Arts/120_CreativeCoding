// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 20-6: osc1illators and frequency

var osc1, osc2, sound1, sound2;

function preload(){
    sound1 = loadSound("./sounds/doorbell.mp3");
    sound2 = loadSound("./sounds/beat.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  osc1 = new p5.Oscillator();
  osc2 = new p5.Oscillator();
  osc1.setType('sine');
  osc2.setType('sine');
  osc1.start();
  osc2.start();
}

function draw() {
  background(200);

  var freq = map(mouseX, 0, width, 150, 880);
  osc1.freq(freq);

  var freq2 = map(mouseY, 0, height, 150, 880);
  osc2.freq(freq2);



  fill(175);
  stroke(0);
  ellipse(mouseX, 100, 32, 32);
}

function mousePressed() {

    if (mouseX < width/2) {
        sound1.play(0, 0.75, 1, 0, 1);
    } else {
        sound2.play(0, 0.75, 1, 0, 1);

    }

}
