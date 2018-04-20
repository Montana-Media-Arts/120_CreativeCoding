//tops* class

function Swords(x, y, blade) {
  this.blade = blade;
  this.x = random(x);
  this.y = random(y);

  this.balance = 0;
  this.tops = 0;

  this.dirX = 1;
  this.dirY = 1;
  this.maxDir = 10; //variables for speed

  this.maxWidth = width;
  this.maxHeight = height;

  //this.r = random(256);
  //this.g = random(256);
  //this.b = random(256); //variables to set random colors. don't need these this time around

}

Swords.prototype.draw = function() {
    push();
    //top
    translate(this.x, this.y);
    //fill(this.r, this.g, this.b);
    //noStroke(); //remnants of a 2d world
    normalMaterial();
    rotateX(frameCount * 0.01);
    this.balance = box(5, this.blade + 10, 5);
    this.tops = cone(this.blade - 10, 5); //i've constructed some tops on accident while trying to make swords, and they work fine. 
    pop();
  } //draws a top* consisting of a thin box and a very flat cone
  // adding any more additional shapes to the equation makes the whole program laggy

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
  rotateX(frameCount * 0.01);
  for (var r = 0; r < 18; r++) {
    rotateX(PI / 10);
    rotateY(PI / 3);
    rotateZ(PI / 5); //each rotation axis here contributes to the positions and boundaries of the top cycles.
    this.draw(); //for example, making rotateZ (PI/8) lowers the ceiling and has the tops bounce downwards when they hit the middle of the screen.
  }
}
/*
Swords.prototype.spintwo = function() {
  for (var r = 0; r < 18; r++) {
    rotateX(PI / 10);
    rotateY(PI / 3);
    rotateZ(PI / 5);
    this.draw(); //spintwo() is just spin() but without the rotateX being affected by the for loop. this is called on mouseClicked.
  }
} */