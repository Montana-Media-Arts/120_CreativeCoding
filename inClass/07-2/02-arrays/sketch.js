
// create an empty array
var myArray = [];

// create a filled, array
// in this case, we have placed in integers
var numArray = ["Ha", "JS", ":)"];

var bg_color;

function setup() {
    createCanvas(windowWidth,windowHeight);
    bg_color = color(230, 240, 200);
    background(bg_color);

    textSize(56);

    text("numArray: " + numArray, 20, 100);

    // Pull a single element/item out of the array
    text("single element: " + numArray[2], 20, 200);
}

function draw() {

}
