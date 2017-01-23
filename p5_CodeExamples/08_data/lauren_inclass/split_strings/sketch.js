var sentences;
var pieces;

function preload() {
  sentences = loadStrings('lines2.txt');
}

function setup() {
  createCanvas(400, 600);
  pieces = split(sentences[0], ',');
}

function draw() {
  background(255);
  for (var i=0; i<pieces.length; i++) {
    text(pieces[i], 30, 30+30*i);
  }
}
