/* VARIABLES */

// -> To declare we use the keyword 'let'
// This declares to the computer a new piece of reserved memory
// This memory is referenced by the namespace "myFirstVar"
let myFirstVar;

// Assign a value to the Variable
// Said "myFirstVar *gets* 120"
myFirstVar = 120;

function setup() {
	createCanvas( 800, 400 );
	background( 200 );
}

function draw() {
	translate( 400, 200 );
	ellipse( 0, 0, myFirstVar );
}
