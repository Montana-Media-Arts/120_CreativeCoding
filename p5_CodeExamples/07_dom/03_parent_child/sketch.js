// ICM 2015
// DOM Manipulation
// https://github.com/ITPNYU/ICM-2015

function setup() {


  var canvas = createCanvas(300, 200);

  // We can put other HTML stuff inside our DOM elements
  var text = createP("Here is some text in a paragraph! And now also this link is added: ");

  // But p5 also has some functions to create specific elements like a link
  var link = createA("http://i.imgur.com/WXaUlrK.gif", "deal with it");

  // We can put the link element inside the paragraph one with parent()
  // link.parent(text);
  // this is the equivalent with child()
  text.child(link);
}




// A simple animation
function draw() {
  background(51);
  stroke(255);
  line(frameCount % width, 0, frameCount % width, height);
}
