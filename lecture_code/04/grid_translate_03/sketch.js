gridSize = 50;

function setup(){
    createCanvas(400,400);


}

function draw() {
    background(255);

    translate( 200, 200 );

    drawGrid();
    drawGridText();

    // draw the smily face head
    stroke( 0 );
    fill('rgba(234, 255, 61, 0.5)');
    ellipse( 0, 0, 400 );

    // draw the smiley face mouth
    noStroke();
    fill( 40, 175 );
    arc( 0, 50, 300, 200, 0, PI );

    // draw smily face eyes
    // notice the use of negative numbers to go "above" 0
    // and to draw the left eye
    fill( 40, 175 );
    // left eye
    ellipse( -100, -75, 100 );
    // right eye
    ellipse( 100, -75, 100 );

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
