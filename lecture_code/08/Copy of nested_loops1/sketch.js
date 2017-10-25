// Adapted from: 
// Getting Started with p5.js
// Lauren McCarthy, Casey Reas, Ben Fry

function setup() {
	createCanvas( windowWidth, 400);
	noStroke();
}

function draw() {
	background(0);
	for ( let y = 0; y < height+25; y += 50) {
		for ( let x = 0; x < width+25; x += 50) {
			fill(255, 140);
			ellipse(x, y, 50, 50);
		}
	}
}