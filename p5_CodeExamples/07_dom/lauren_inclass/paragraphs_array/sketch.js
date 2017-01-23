var button;
var clearButton;
var paragraphs = [];
var n = 0;

function setup() {
  noCanvas();
  button = createButton("add");
  button.mousePressed(buttonAdd);
  clearButton = createButton("clear");
  clearButton.mousePressed(clearAll);
}

function buttonAdd() {
  var p = createP("new paragraph");
  p.position(random(windowWidth), random(windowHeight));
  paragraphs.push(p);
}

function clearAll() {
  paragraphs[n].remove();
}