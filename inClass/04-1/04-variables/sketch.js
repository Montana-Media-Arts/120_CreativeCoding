
// VARIABLE SCOPE

// A variable assigned outside of a function has "global scope"
var globalVar;
globalVar = 60;


function setup() {
	createCanvas(800,400);

	var localVar;

	localVar = 10;

}

function draw() {


	background(200);

	noFill();
	translate(400,200);

	// Here is thew use of a global variable defined "ABOVE" setup()
	ellipse(0,0,globalVar,globalVar);

	// Here is a local variable defined in "setup()"
	// This will not work
	// Wer would need to call it in "setup()"
	ellipse(0,0,localVar,localVar);


}
