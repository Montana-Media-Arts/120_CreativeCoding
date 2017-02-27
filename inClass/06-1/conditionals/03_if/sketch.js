var bool = true;

function setup() {
  createCanvas(400,400);
  frameRate(2);
}

function draw() {
  background(255);
  textSize(36);

  if (bool) {
    text("This was true!!!", 40, 40);
  } else {
    text("NOOOOOOOOOOOOO", 80, 80);
  }

  // New operator
  // '!'
  // This means "not"
  bool = !bool;


}
