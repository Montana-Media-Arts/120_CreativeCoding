
// RULES for naming variables in JS

/*
Variables can only;
1. contain letters (i.e. a-z or A-Z)
2. Numbers
3. or Underscores

Variables can only start with;
1. A lower case letter
2. or Underscore (but this should be saved for speciaql purposes)

*/


var der;

// Use of capital letters to visually distinguish words
// this is known as camelCase
var myFirstVar;

// underscore seperate words
var my_first_var;

var var1;

// NOT VALID
// var 1var;

// valid, but not suggested.
var _myVar;



function setup() {
createCanvas(800,400);


}

function draw() {
	background(240);

	// This is TECHNICALLY VALID
	var x = 40;

	ellipse(400, 200, x, x);


	// Variables should be named, in order to increase code "readability"

	// This is better VALID
	var ellipseSize = 40;

	ellipse(600, 200, ellipseSize, ellipseSize);
}
