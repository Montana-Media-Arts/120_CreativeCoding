function setup() {
    createCanvas(600,700);
    background(200, 40, 6);
}

// Variables to define ellipse position
// NOTE: This *must* be defined globally.
// Otherwise, if they were defined locally inside draw
// they would get reset to '100' every frame,
// and the object would not move
var posX = 100;
var posY = 100;

function draw() {
    ellipse(posX,posY,30,30);

    // update posX & posY every frame
    posX = posX + 1;
    posY = posY + 1;
}
