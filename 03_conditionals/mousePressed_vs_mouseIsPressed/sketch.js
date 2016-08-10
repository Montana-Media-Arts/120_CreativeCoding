// mouseIsPressed is a variable. in this example
// the state of it gets checked every time draw is called
// so the ellipse keeps growing as you hold down the mouse

// var d = 10;

// function setup() {
//   createCanvas(600, 400);
// }

// function draw() {
//   background(200);
//   if (mouseIsPressed) {
//     d++;
//   }
//   ellipse(width/2, height/2, d, d);
// }

// compare to below!
// mousePressed is a function that gets called
// once for each click of the mouse. so each click
// makes the mouse grow, but you must release and click
// again to keep increasing the size.


var d = "hello";

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200);
  text(d, 50, 50);
  print("ab" > "ae");
  print("ab" < "ae");
}




