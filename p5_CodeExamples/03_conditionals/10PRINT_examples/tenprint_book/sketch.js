var w = 16;
var h = 16;
var index = 0;

function setup() {
  createCanvas(640, 384);
  background(0, 0, 255);
  strokeWeight(3);
  stroke(224);
  smooth();
}
function draw() {
  var x1 = w*index;
  var x2 = x1 + w;
  var y1 = h*23;
  var y2 = h*24;
  if (random(2) < 1) {
    line(x2, y1, x1, y2);
  } 
  else {
    line(x1, y1, x2, y2);
  }
  
  index++;
  if (index == width/w) {
    var p = get(0, h, width, h*23);
    background(0, 0, 255);
    set(0, 0, p);
    index = 0;
  }
}