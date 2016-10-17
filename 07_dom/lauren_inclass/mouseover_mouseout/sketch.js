var g = 0;
var pw;

function setup() {
  c = createCanvas(400, 400);
  c.position(50, 50);
  c.mousePressed(setRandom);

  pw = createP("white");
  pw.position(500, 20);
  pw.mouseOver(setWhite);
  pw.mouseOut(setBlack);
  
  
}

function draw() {
  background(g);
  ellipse(width / 2, height / 2, 50, 50);
}

function setWhite() {
  g = 255;
}

function setBlack() {
  g = 0;
}

function setRandom() {
  g = random(255);
}