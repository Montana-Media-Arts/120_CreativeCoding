// Getting Started with p5.js
// Lauren McCarthy, Casey Reas, Ben Fry

function setup() {
	createCanvas(windowWidth, 120);
}

function draw() {
	background(0);
	for (let y = 32; y <= height; y += 8) {
		for (let x = 12; x <= width; x += 15) {
			fill(255);
			ellipse(x + y, y, 16 - y/10.0, 16 - y/10.0);
		}
	}
}
