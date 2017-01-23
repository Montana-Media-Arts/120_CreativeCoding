// An empty array
var particleList = [];

function setup() {
  createCanvas(400, 400);

  // Make 50 (try changing this number!) objects
  for (var i = 0; i < 50; i++) {
    // Make a single object
    var particle = {
      // random position
      x: random(width),
      y: random(height),
      radius: 12,
      // draw it
      display: function() {
        fill(255, 100);
        ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
      },
      // Move it randomly
      move: function() {
        this.y = this.y + random(-1, 1);
      }
    };
    // Put the object in the array (0-49)
    particleList[i] = particle;
  }
}

function draw() {
  background(0);
  // Display and move all the objects
  for (var i = 0; i < particleList.length; i++) {
    particleList[i].display();
    particleList[i].move();
  }
}