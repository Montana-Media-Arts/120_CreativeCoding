
gridSize = 50;

function setup(){
    createCanvas(400,400);


}

function draw() {
    background(255);

    drawGrid( 'rgb(205, 183, 117)' );

    rotate( radians(15) );

    drawGrid('red');
}

function drawGrid(color) {
	stroke(color);
	fill(color);
	for (var x=-width; x < width; x+=gridSize) {
		line(x, -height, x, height);
		text(x, x+1, 12);
	}
	for (var y=-height; y < height; y+=gridSize) {
		line(-width, y, width, y);
		text(y, 1, y+12);
	}
}
