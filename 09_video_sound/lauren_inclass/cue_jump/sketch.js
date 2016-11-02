var vid;
var x = 0;
var y = 100;

function setup() {
  var cnv = createCanvas(600, 400);
  vid = createVideo('fingers.mov');
  vid.addCue(6, jump);
  vid.loop();
  vid.hide();
}

function draw() {
  background(0);
  image(vid, x, y, 100, 100);
  x++;
}

function jump() {
  y = 50;
}