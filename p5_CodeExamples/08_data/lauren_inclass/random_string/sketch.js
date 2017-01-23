var sentences;
var i = 0;

function preload() {
  sentences = loadStrings('lines.txt');
}

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  textSize(20);
}

function draw() {
  background(255);
  text(sentences[i], width/2, height/2);
}


function mousePressed() {
  i = int(random(0, sentences.length));
}