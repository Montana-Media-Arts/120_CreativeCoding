//Swords class

function Swords(x, y, blade) {
  this.blade = blade;
  this.x = random(x);
  this.y = random(y);

  this.bladeShape = 0;
  this.hilt = 0;
  this.tip = 0;

  this.dirX = 1;
  this.dirY = 1;
  this.maxDir = 10; //variables for speed

  this.maxWidth = width;
  this.maxHeight = height;

  this.r = random(256);
  this.g = random(256);
  this.b = random(256); //variables to set random colors

}

Swords.prototype.draw = function() {
    push();
    //sword
    translate(this.x, this.y);
    fill(this.r, this.g, this.b);
    noStroke();
    this.bladeShape = rect(0, 0, 10, this.blade + 10);
    this.hilt = rect(-10, this.blade - 20, 30, 5);
    this.tip = triangle(0, 0, 10, 0, 5, -15);
    pop();
  } //draws a sword

Swords.prototype.move = function() {
    this.x += this.dirX;
    this.y += this.dirY;
    this.edgeCheck();
  } //makes object move

//makes object bounce off of canvas walls
Swords.prototype.edgeCheck = function() {
  if (this.x >= this.maxWidth) {
    this.dirX = random(this.maxDir) * -1;
  } else if (this.y >= this.maxHeight) {
    this.dirY = random(this.maxDir) * -1;
  } else if (this.x <= 0) {
    this.dirX = random(this.maxDir);
  } else if (this.y <= 0) {
    this.dirY = random(this.maxDir);
  }

}

Swords.prototype.spin = function() {
  for (var r = 0; r < 19; r++) {
    rotate(PI / 6);
    this.draw();
  }
}