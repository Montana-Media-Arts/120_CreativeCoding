function setup() {
    createCanvas(600,700);
    background(200, 40, 6);

}


// Variables to define ellipse position
var posX = 100;
var posY = 100;

function draw() {


    ellipse(posX,posY,30,30);

    // update posX every frame
    posX = posX + 1;
    posY = posY + 1;

}
