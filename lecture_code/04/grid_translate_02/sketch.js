gridSize = 50;

function setup(){
    createCanvas(400,400);


}

function draw() {
    background(255);

    translate( 150, 100 );

    drawGrid();
    drawGridText();

    noStroke();
    fill( 'rgba(89, 255, 91, 0.5)' );
    ellipse( 0, 0, 50 );

    fill( 'rgba(89, 210, 255, 0.5)' );
    rect( 50, 50, 100, 100 );
}

function drawGrid() {
	stroke(200);
	fill(120);
	for (var x=-width; x < width; x+=gridSize) {
		line(x, -height, x, height);
	}
	for (var y=-height; y < height; y+=gridSize) {
		line(-width, y, width, y);
	}
}
function drawGridText() {
	stroke(200);
	fill(120);
	for (var x=-width; x < width; x+=gridSize) {
		text(x, x+1, 12);
	}
	for (var y=-height; y < height; y+=gridSize) {
		text(y, 1, y+12);
	}
}
