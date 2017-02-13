
// A Variable
// -> To create we use the keyword 'var'
// This declares to the computer a new piece of reserved memory
// This memory is referenced by the namespace "myFirstVar"
var myFirstVar;

// Assign a value to the Variable
// Said "myFirstVar *gets* 60"
myFirstVar = 120;

function setup() {
	createCanvas(800,400);
	background(200);

	translate(400,200);
	ellipse(0,0,myFirstVar,myFirstVar);

}

function draw() {

}
