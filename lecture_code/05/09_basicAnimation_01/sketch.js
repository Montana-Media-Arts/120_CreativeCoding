function setup() {
    createCanvas( 600, 700 );
    background( 200, 40, 6 );
}

// Variables to define ellipse position
// NOTE: This *must* be defined globally.
// Otherwise, if they were defined locally inside draw
// they would get reset to '100' every frame,
// and the object would not move
let posX = 0;
let posY = 0;

function draw() {
    ellipse( posX, posY, 30, 30 );

    // update posX & posY every frame
    // add 1, then re-assign back to self
    posX = posX + 1;
    posY = posY + 1;
}
