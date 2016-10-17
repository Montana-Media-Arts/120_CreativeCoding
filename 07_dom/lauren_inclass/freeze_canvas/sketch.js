var x = 0;
var y = 0;
var xspeed = 5;
var yspeed = -2;
var gravity = 1;
var c;
var freeze = false;

function setup() {
  c = createCanvas(300, 300);
  c.mousePressed(freezeCanvas); 
  c.mouseReleased(unfreezeCanvas);
}

function draw() {
  background(0);

  if (freeze == false) {
    x += xspeed;
    y += yspeed;
    yspeed += gravity;
    if (x < 0 || x > width) {
      xspeed = -1 * xspeed;
    }
    if (y > height) {
      yspeed = -1 * yspeed;
    }
  }

  ellipse(x, y, 20, 20);
  c.position(x, y);
}

function freezeCanvas() {
  freeze = true;
}

function unfreezeCanvas() {
  freeze = false;
}

