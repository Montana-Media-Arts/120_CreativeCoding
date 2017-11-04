// create a filled array
// This array has strings in its elements
let stringArray = ["Ha", "JS", ":)"]


function setup() {
    createCanvas(windowWidth,400);
    bg_color = color(230, 240, 200);
    background(bg_color);
}

function draw() {
    textSize(56);
    // print the arrays to the screen
    text("stringArray: " + stringArray, 20, 80);
    text("The first element in the array is: " + stringArray[0], 20, 200);
}
