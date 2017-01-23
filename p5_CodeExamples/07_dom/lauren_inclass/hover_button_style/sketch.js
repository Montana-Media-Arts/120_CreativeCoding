var c;
var p;
var g = 0;

function setup() {
  c = createCanvas(400, 400); 
  c.position(0, 0);
  
  p = createP("hover me");
  p.style("font-size", "30px");
  p.style("background-color", "rgb(0, 0, 128)");
  p.style("padding", "20px");
  p.style("color", "red");
  p.style("font-weight", "bold");
  p.style("font-family", "monospace");
  p.position(450, 50);
  
  p.mouseOver(setWhite);
  p.mouseOut(setBlack);
  
}

function draw() {
  background(g);
  ellipse(width/2, height/2, 50, 50);
}

function setWhite() {
  g = 255;
}

function setBlack() {
  g = 0;
}
