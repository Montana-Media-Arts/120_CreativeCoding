function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200)
  for (var i = 0; i < 10; i++) {
    rect(i*50, 200, 25, 25);
  }
}

// above is equivalent to

// function draw() {
//   rect(0, 200, 25, 25);
//   rect(50, 200, 25, 25);
//   rect(100, 200, 25, 25);
//   rect(150, 200, 25, 25);
//   rect(200, 200, 25, 25);
//   rect(250, 200, 25, 25);
//   rect(300, 200, 25, 25);
//   rect(350, 200, 25, 25);
//   rect(400, 200, 25, 25);
//   rect(450, 200, 25, 25);
// }