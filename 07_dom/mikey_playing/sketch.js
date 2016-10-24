var b1;
var paras = [];

function setup() {
  noCanvas();
  b1 = createButton("My First Button");
  b1.mousePressed(newP);
}

function draw() {
}

function newP(){
  var newp;
  newp = createP("hahahaha");
  newp.position(random(windowWidth), random(windowHeight));
  paras.push(newp);
}
