
//constructor method
function HappyFace(red,green,blue){
  this.d = 80;
	this.posX = random(width);
	this.posY = random(height);
	this.speedX = 1;
	this.speedY = 1;
	this.dirX = 1;
	this.dirY = 1;
  this.r = red;
  this.g = green;
  this.b = blue;
}

HappyFace.prototype.drawFace = function() {

  // save current drawing style
  push();

  translate(this.posX, this.posY);
  fill(this.r,this.g,this.b);
  ellipse(0,0,this.d,this.d);
  arc(-20,-10,15,15,PI,TWO_PI);
  arc(20,-10,15,15,PI,TWO_PI);
  arc(0,10,40,40,TWO_PI,PI);

  // restore previous drawing style
  pop();
  this.move();

};

HappyFace.prototype.move= function(){
  this.posX = this.posX + (this.speedX*this.dirX);
  this.posY = this.posY + (this.speedY*this.dirY);
  if (this.posX>=width || this.posX<= 0) {
    this.dirX= -1*this.dirX;
    this.speedX= random(20);
    if (this.posX>=width) {
      this.posX=width-1;
    }
    if (this.posX<=0){
      this.posX=1;
    }
  }

  if (this.posY>=height || this.posY<= 0) {
    this.dirY= -1*this.dirY;
    this.speedY= random(20);
    if (this.posY>=height) {
      this.posY=height-1;
    }
    if (this.posY<=0){
      this.posY=1;
    }
  }
};
