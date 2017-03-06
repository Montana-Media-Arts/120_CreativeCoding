function setup() {
    createCanvas(800,600);
    background(240);
}

function draw() {

    background(240);

    text( "5", 20, 20);
    text( five(), 20, 40);

    // var addN = addNumbers(30, 20);
    var addN = addNumbers();
    text( addN, 20, 100);

}


function five() {
    return "some other value";
}

// define a function that adds two objects together
function addNumbers(num1, num2){

    var result;

    if (num1 && num2) {
        result = num1 + num2;
    } else {
        result = five();
    }

    // returns the value to the function call
    return result;
}
