
let stringArray = ["Ha", "JS", ":)", "arrays are fun", "p5 is AWESOME!!"];

let bg_color = 'rgb( 230, 240, 200 )';
function setup() {
    createCanvas(windowWidth,400);
    frameRate(1);
}

// initialize a variable 'idx' to the Number 0
let idx = 0;
function draw() {
    background(bg_color);
    textSize(56);

    text("The index value is: " + idx, 20, 80);
    text("The element is: " + stringArray[idx], 20, 200);

    // increment the idx variable
    // also make sure it stays within the bounds of the array
    idx = ( idx + 1 ) % stringArray.length;
}
