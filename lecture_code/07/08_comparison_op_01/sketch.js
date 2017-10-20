function setup() {
    createCanvas(windowWidth, 300);
}

function draw() {
    // If the mouse position is greater than the
    // middle of the screen (width/2), set the
    // background to black, otherwise, set the
    // background to white.
    if (mouseX > width / 2) {
        background(0);
    } else {
        background(255);
    }
}
