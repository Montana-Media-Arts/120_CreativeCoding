


// create a filled, array
// in this case, we have placed in integers
var myArray = [];

var bg_color;

function setup() {
    createCanvas(windowWidth,windowHeight);
    bg_color = color(230, 240, 200);
    background(bg_color);

    textSize(56);

    frameRate(1);


}


var iterater = 0;
function draw() {
    background(bg_color);


    text("myArray: " + myArray, 20, 100);

    // I want to replace the element at index:1 with the string "mikey"
    var index = floor(random(0, 20));
    myArray[index] = iterater;

    iterater++;




}
