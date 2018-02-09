// Rollover Rect

let x = 250;
let y = 150;
let box_size = 100;

function setup() {
    createCanvas(windowWidth, 400);
}

function draw() {
    background(200);
    // check if the mouse is witin the bounds
    // of the box?
    if ((mouseX > x) && (mouseX < x + box_size) && (mouseY > y) && (mouseY < y + box_size)) {
        fill(0);
    } else {
        fill(255);
    }

    // draw the rollover box
    rect(x, y, box_size, box_size);
}
