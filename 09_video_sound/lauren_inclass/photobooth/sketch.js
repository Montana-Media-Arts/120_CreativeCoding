var capture;
var button;

function setup() {
  createCanvas(600, 400);
  capture = createCapture(VIDEO);
  //capture.hide();
  button = createButton('take pic');
  button.position(300, 300);
  button.mousePressed(snap);
}

function snap() {
  image(capture, 0, 0);
}
