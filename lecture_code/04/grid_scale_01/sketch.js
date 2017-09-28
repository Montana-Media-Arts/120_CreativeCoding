
gridSize = 50;

function setup(){
    createCanvas(400,400);


}

function draw() {
    background(255);


    // NO SCALING
    translate( 75, 75 );
    drawGrid( 'rgb(205, 183, 117)' );
    // ** draw the smily face **
    stroke( 0 );
    fill('rgba(234, 255, 61, 0.7)');
    ellipse( 0, 0, 100 );
    noStroke();
    fill( 40, 127 );
    arc( 0, 15, 75, 50, 0, PI );
    ellipse( -20, -15, 20 );
    ellipse( 20, -15, 20 );

    // scale by 200%
    scale(2.0);
    translate( 75, 75 );
    drawGrid('red');
    // ** draw the smily face **
    stroke( 0 );
    fill('rgba(234, 255, 61, 0.7)');
    ellipse( 0, 0, 100 );
    noStroke();
    fill( 40, 127 );
    arc( 0, 15, 75, 50, 0, PI );
    ellipse( -20, -15, 20 );
    ellipse( 20, -15, 20 );


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
