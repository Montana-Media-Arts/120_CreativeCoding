var myGraphics;

function setup() {
  createCanvas(300, 300);
  graphics = createGraphics(200, 200);
  graphics.show(); // by default it's hidden
}

function draw() {
  background(0);
  ellipse(width/2, height/2, 300, 300);
  image(graphics, 0, 0); // this draws into original canvas
  
  // draw stuff into graphics buffer
  graphics.background(255, 0, 0);
  graphics.ellipse(50, 50, 50, 50);
}