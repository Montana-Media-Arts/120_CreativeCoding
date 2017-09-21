
// create an empty array
var myArray = [];

// create a filled, array
// in this case, we have placed in integers
var numArray = [2, 4, 9, 100];

var bg_color;

function setup() {
    createCanvas(windowWidth,windowHeight);
    bg_color = color(230, 240, 200);
    background(bg_color);


    // Find and return the first index where the element value equals the value placed as an argumengt to .indexOf(arg)
    var der = [12, 5, 8, 130, 44].indexOf(8);

    textSize(56);
    text("der: " + der, 20, 80);

}

function draw() {

}
