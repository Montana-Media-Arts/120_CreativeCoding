/* RE-ASSIGNING VARIABLES */

function setup() {
	createCanvas( 600, 400 );
	background( 'rgb(94, 221, 183)' );
}

function draw() {
	// declare a variable "point_pos"
	// and assign it the Number value 10
	let point_pos = 10;

	// draw a point at 'point_pos'
	strokeWeight(10);
	point( point_pos, point_pos );

	// re-assign 'point_pos' a new value
	point_pos = 20;
	// draw another point
	point( point_pos, point_pos );
}
