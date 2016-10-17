var addButton;
var clearButton;
var paragraphs = [];
var n = 0;

function setup() {
  noCanvas();  
  addButton = createButton("add");
  addButton.position(50, 50);
  addButton.mousePressed(addParagraph);
  
  clearButton = createButton("clear");
  clearButton.position(100, 50);
  clearButton.mousePressed(clearAll);
}

function addParagraph() {
  var p = createP("new paragraph!");
  p.position(random(windowWidth), random(windowHeight));
  paragraphs.push(p);
}

function clearAll() {
  for (var i=0; i<paragraphs.length; i++) {
    paragraphs[i].remove();
  }
  paragraphs = [];
}

