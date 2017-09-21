
// A Variable
// -> To create we use the keyword 'var'
// This declares to the computer a new piece of reserved memory
// This memory is referenced by the namespace "myFirstVar"
var myFirstVar;



function setup() {
	createCanvas(800,400);
	background(200);

	noFill();

	translate(400,200);
	myFirstVar = 70;
	ellipse(0,0,myFirstVar,myFirstVar);

	myFirstVar = myFirstVar * 0.5;
	ellipse(0,0,myFirstVar,myFirstVar);
}

function draw() {

}
