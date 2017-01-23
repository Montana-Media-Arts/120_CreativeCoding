// ICM 2015
// DOM Manipulation
// https://github.com/ITPNYU/ICM-2015

// Three elements
var elt0;
var elt1;
var elt2;

function setup() {
  
  noCanvas();
  
  // Three floating elements
  elt0 = createP("Here's a paragraph.");
  elt1 = createP("Here's another paragraph.");
  elt2 = createP("Oh and even another one -- hover me!");
  
  // Let's give the first two elements class donkey, and the third class yogurt.
  elt0.class('donkey');
  elt1.class('donkey');
  elt2.class('yogurt');
}






