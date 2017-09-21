
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

    textSize(56);
     numArray.find(function(index, value){
         text("index of value 9: " + index, 20, index*10);
     });
    text("numArray: " + numArray, 20, 200);
}

function draw() {

}
