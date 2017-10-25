// Adapted from: 
// Getting Started with p5.js
// Lauren McCarthy, Casey Reas, Ben Fry

function setup() {
	createCanvas( windowWidth, 400);
	noStroke();
}

function draw() {
	let numPerRow = 10;
	let circleSize = 50;
	let pad = width / numPerRow;

	background(0);
	for ( let y = circleSize; y < height; y += pad) {
		for ( let x = circleSize; x < width; x += pad) {
			fill( 255, 140, random(255) );
			ellipse( x, y, circleSize, circleSize );
		}
	}
}