


// create a filled, array
// in this case, we have placed in integers
let myArray = ["Ha", "JS", ":)"];

let bg_color;

function setup() {
    createCanvas(windowWidth,windowHeight);
    bg_color = color(230, 240, 200);
    background(bg_color);

    textSize(56);

    text("myArray: " + myArray, 20, 100);

    // I want to replace the element at index:1 with the string "mikey"
    myArray[1] = "mikey";

    text("myArray: " + myArray, 20, 100);


    // Pull a single element/item out of the array
    text("single element: " + myArray[2], 20, 200);
}

function draw() {

}
