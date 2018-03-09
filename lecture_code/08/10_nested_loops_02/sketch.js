function setup() {
	createCanvas(windowWidth, 200);
}

function draw() {
	background(0);
	fill(255);
	for (let y = 0; y <= height; y += 10) {
		for (let x = 0; x <= width; x += 10) {
			let d = y/10;
			ellipse(x + y, y, d, d);
		}
	}
}
