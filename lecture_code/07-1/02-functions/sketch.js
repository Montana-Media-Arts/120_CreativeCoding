function setup() {
    createCanvas(800,600);
    background(240);

}

function draw() {
    drawEllipse();
    drawRect();
}


//////// DEFINE A "GLOBAL FUNCTION" or Functuion Decleration ///////////
/*
    A global function can be defined anywhere in the code.

    JS will load this function, before executing any code functions.
*/

function drawEllipse(){
    push();
    ellipse(300, 200, 30, 30);
    pop();
}


//////// DEFINE A "Function Expression" ///////////
var drawRect = function(){
    push();
    rect(20, 20, 100, 40);
    pop();
};
