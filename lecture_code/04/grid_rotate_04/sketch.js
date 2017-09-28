function setup(){
    // create a canvas that is
    // (width:400px, height:400px)
    createCanvas(400,400);
}

var gridSize = 50;
function draw() {
    // set the background to 'white'
    background(255);

    // no rotate
    // translate to (x:200, y:75)
    // smiley centered at (x:75, y:75)
    translate( 250, 75 );
    drawGrid( 'rgba(157, 42, 115, 0.57)' );
    // ** draw the smily face **
    stroke( 0 );
    fill('rgba(234, 255, 61, 0.5)');
    ellipse( 0, 0, 100 );
    noStroke();
    fill( 'rgba(157, 42, 115, 0.57)' );
    arc( 0, 15, 75, 50, 0, PI );
    ellipse( -20, -15, 20 );
    ellipse( 20, -15, 20 );

    // rotate 45°
    // translate to (x:75, y:75)
    // smiley centered at (x:150, y:150)
    translate( 75, 75 );
    rotate( radians(45) );
    drawGrid( 'rgba(0, 42, 115, 0.57)' );

    // ** draw the smily face **
    stroke( 0 );
    fill('rgba(234, 255, 61, 0.5)');
    ellipse( 0, 0, 100 );
    noStroke();
    fill( 'rgba(0, 42, 115, 0.57)' );
    arc( 0, 15, 75, 50, 0, PI );
    ellipse( -20, -15, 20 );
    ellipse( 20, -15, 20 );

    // rotate 45°
    // translate to (x:75, y:75)
    // smiley centered at (x:225, y:225)
    translate( 75, 75 );
    rotate( radians(45) );
    drawGrid( 'rgba(0, 142, 115, 0.57)' );

    // ** draw the smily face **
    stroke( 0 );
    fill('rgba(234, 255, 61, 0.5)');
    ellipse( 0, 0, 100 );
    noStroke();
    fill( 'rgba(0, 142, 115, 0.57)' );
    arc( 0, 15, 75, 50, 0, PI );
    ellipse( -20, -15, 20 );
    ellipse( 20, -15, 20 );

    // rotate 45°
    // translate to (x:75, y:75)
    // smiley centered at (x:300, y:300)
    translate( 75, 75 );
    rotate( radians(45) );
    drawGrid( 'rgba(0, 255, 115, 0.57)' );

    // ** draw the smily face **
    stroke( 0 );
    fill('rgba(234, 255, 61, 0.5)');
    ellipse( 0, 0, 100 );
    noStroke();
    fill( 'rgba(0, 255, 115, 0.57)' );
    arc( 0, 15, 75, 50, 0, PI );
    ellipse( -20, -15, 20 );
    ellipse( 20, -15, 20 );

    // rotate 45°
    // translate to (x:75, y:75)
    // smiley centered at (x:300, y:300)
    translate( 75, 75 );
    rotate( radians(45) );
    drawGrid( 'rgba(0, 255, 220, 0.57)' );

    // ** draw the smily face **
    stroke( 0 );
    fill('rgba(234, 255, 61, 0.5)');
    ellipse( 0, 0, 100 );
    noStroke();
    fill( 'rgba(0, 255, 220, 0.57)' );
    arc( 0, 15, 75, 50, 0, PI );
    ellipse( -20, -15, 20 );
    ellipse( 20, -15, 20 );

    // rotate 45°
    // translate to (x:75, y:75)
    // smiley centered at (x:300, y:300)
    translate( 75, 75 );
    rotate( radians(45) );
    drawGrid( 'rgba(157, 230, 240, 0.57)' );

    // ** draw the smily face **
    stroke( 0 );
    fill('rgba(234, 255, 61, 0.5)');
    ellipse( 0, 0, 100 );
    noStroke();
    fill( 'rgba(157, 230, 240, 0.57)' );
    arc( 0, 15, 75, 50, 0, PI );
    ellipse( -20, -15, 20 );
    ellipse( 20, -15, 20 );

    // rotate 45°
    // translate to (x:75, y:75)
    // smiley centered at (x:300, y:300)
    translate( 75, 75 );
    rotate( radians(45) );
    drawGrid( 'rgba(255, 255, 115, 0.57)' );

    // ** draw the smily face **
    stroke( 0 );
    fill('rgba(234, 255, 61, 0.5)');
    ellipse( 0, 0, 100 );
    noStroke();
    fill( 'rgba(255, 255, 115, 0.57)' );
    arc( 0, 15, 75, 50, 0, PI );
    ellipse( -20, -15, 20 );
    ellipse( 20, -15, 20 );

    // rotate 45°
    // translate to (x:75, y:75)
    // smiley centered at (x:300, y:300)
    translate( 75, 75 );
    rotate( radians(45) );
    drawGrid( 'rgba(230, 230, 0, 0.57)' );

    // ** draw the smily face **
    stroke( 0 );
    fill('rgba(234, 255, 61, 0.5)');
    ellipse( 0, 0, 100 );
    noStroke();
    fill( 'rgba(230, 230, 0, 0.57)' );
    arc( 0, 15, 75, 50, 0, PI );
    ellipse( -20, -15, 20 );
    ellipse( 20, -15, 20 );

}



function drawGrid(color) {
	stroke(color);
	fill(color);

    line( -1000, 0, 1000, 0 );
	text(0, 1, 12);
    line( 0, -1000, 0, 1000 );
	// text(0, 1, 0+12);

    // for (var x=-width; x < width; x+=gridSize) {
	// 	line(x, -height, x, height);
	// }
	// for (var y=-height; y < height; y+=gridSize) {
	// 	line(-width, y, width, y);
	// }
}
