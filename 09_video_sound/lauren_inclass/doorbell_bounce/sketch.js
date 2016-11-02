var sound;
var x = 25;
var speed = 10;

function preload() {
  sound = loadSound('doorbell.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  x += speed;
  ellipse(x, height/2, 50, 50);
  if (x <= 25 || x >= width-25) {
    speed = -1*speed;
    sound.play();
  }
}