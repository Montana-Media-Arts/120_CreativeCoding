// Getting Started with p5.js
// Lauren McCarthy, Casey Reas, Ben Fry

function setup() {
	createCanvas(windowWidth, 240);
	strokeWeight(2);
}

function draw() {
	background(200);
	for (let x = 20; x < 400; x += 20) {
		line(x, 0, 1.5*x, 120);
	}
}
