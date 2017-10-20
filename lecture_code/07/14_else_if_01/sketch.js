function setup() {
    createCanvas(windowWidth, 300);
}

function draw() {
    // If the mouse position is less than
    // one-third of the screen (width*1/3), set the
    // background to black, otherwise, if the mouse
    // position is less than two-thirds of the screen,
    // set the background to red. Else, if both
    // are false, set the background to orange.
    if (mouseX < width*1/3) {
        background(0);
    } else if(mouseX < width*2/3) {
        background('red');
    } else {
        background('orange');
    }

    // draw lines in the middle
    stroke('white');
    line(width/3, 0, width/3, height);
    line(width*2/3, 0, width*2/3, height);
}
