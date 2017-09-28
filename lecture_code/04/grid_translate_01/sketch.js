
gridSize = 50;

function setup(){
    createCanvas(400,400);


}

function draw() {
    background(255);

    translate( 150, 100 );

    noStroke();
    fill( 'rgb(89, 255, 91)' );
    ellipse( 0, 0, 25 );

    drawGrid();
}

function drawGrid() {
	stroke(200);
	fill(120);
	for (var x=-width; x < width; x+=gridSize) {
		line(x, -height, x, height);
		text(x, x+1, 12);
	}
	for (var y=-height; y < height; y+=gridSize) {
		line(-width, y, width, y);
		text(y, 1, y+12);
	}
}
