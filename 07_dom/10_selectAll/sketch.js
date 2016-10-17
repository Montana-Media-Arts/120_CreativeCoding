// ICM 2015
// DOM Manipulation
// https://github.com/ITPNYU/ICM-2015

// Creating other HTML elements, adding style.

function setup() {
  noCanvas();

  var link = select("#clicky");
  link.mousePressed(shuffleApples);
}


function shuffleApples() {
  // Get an array of elements of the same class
  var apples = selectAll(".apple");
  // Do something to all of them
  for (var i=0; i<apples.length; i++) {
    apples[i].position(random(windowWidth),random(windowHeight));
  }
}

