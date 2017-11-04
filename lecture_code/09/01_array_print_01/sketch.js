// create an empty array
let emptyArray = [];

// create a filled, array
// in this case, we have placed in integers
let numArray = [2, 4, 9, 100];


function setup() {
    createCanvas(windowWidth,400);
    bg_color = color(230, 240, 200);
    background(bg_color);
}

function draw() {
    textSize(56);
    // print the arrays to the screen
    text("emptyArray: " + emptyArray, 20, 80);
    text("numArray: " + numArray, 20, 200);
}
