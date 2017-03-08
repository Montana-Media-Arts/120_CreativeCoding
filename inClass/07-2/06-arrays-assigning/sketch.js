


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


    // this says, do "something" every other draw loop
    if (iterater % 3 == 0) {
        var element = myArray.pop();
        text("element: " + element, 20, 150);

    }



    // I want to replace the element at index:1 with the string "mikey"
    var value = floor(random(0, 20));
    myArray.push(value);

    text("myArray: " + myArray, 20, 100);


    text("array length: " + myArray.length, 20, 250);




    iterater++;


}
