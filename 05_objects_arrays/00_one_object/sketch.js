// Declare the particle variable
var particle;

function setup() {
  createCanvas(400, 400);
  
  // Create a particle object
  // Start with curly brackets
  particle = {
    // Each "property" is a name and value
    x: random(width), // separated with commas
    y: 100,
    radius: 12,
    // Properties can also be a function defintion!
    display: function() {
      ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    },
    move: function() {
      this.y = this.y + 1;
    }
  }; // This is the end of the object creation
}

function draw() {
  background(0);
  // Now it's as easy as referring to the variable name
  // and calling the functions on the variable
  particle.display();
  particle.move();
}