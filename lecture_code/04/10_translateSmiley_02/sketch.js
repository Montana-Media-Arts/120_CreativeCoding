function setup(){
    // create a canvas that is
    // (width:400px, height:400px)
    createCanvas(400,400);
}

function draw() {
    // set the background to 'white'
    background(255);

    // no translate, smiley at true
    // (x:0, y:0)

    // ** draw the smily face **
    stroke( 0 );
    fill('rgba(234, 255, 61, 0.5)');
    ellipse( 0, 0, 100 );
    noStroke();
    fill( 40, 127 );
    arc( 0, 15, 75, 50, 0, PI );
    ellipse( -20, -15, 20 );
    ellipse( 20, -15, 20 );

    // translate to (x:75, y:75)
    // smiley centered at (x:75, y:75)
    translate( 75, 75 );
    // ** draw the smily face **
    stroke( 0 );
    fill('rgba(234, 255, 61, 0.5)');
    ellipse( 0, 0, 100 );
    noStroke();
    fill( 40, 127 );
    arc( 0, 15, 75, 50, 0, PI );
    ellipse( -20, -15, 20 );
    ellipse( 20, -15, 20 );

    // translate to (x:75, y:75)
    // smiley centered at (x:150, y:150)
    // prev(x:75, y:75) + new(x:75, y:75)
    translate( 75, 75 );
    // ** draw the smily face **
    stroke( 0 );
    fill('rgba(234, 255, 61, 0.5)');
    ellipse( 0, 0, 100 );
    noStroke();
    fill( 40, 127 );
    arc( 0, 15, 75, 50, 0, PI );
    ellipse( -20, -15, 20 );
    ellipse( 20, -15, 20 );

    // translate to (x:50, y:50)
    // prev(x:150, y:150) + new(x:50, y:50)
    // smiley centered at (x:200, y:200)
    translate( 50, 50 );
    // ** draw the smily face **
    stroke( 0 );
    fill('rgba(234, 255, 61, 0.5)');
    ellipse( 0, 0, 100 );
    noStroke();
    fill( 40, 127 );
    arc( 0, 15, 75, 50, 0, PI );
    ellipse( -20, -15, 20 );
    ellipse( 20, -15, 20 );

    // translate to (x:100, y:150)
    // prev(x:200, y:200) + new(x:100, y:150)
    // smiley centered at (x:300, y:250)
    translate( 100, 150 );
    // ** draw the smily face **
    stroke( 0 );
    fill('rgba(234, 255, 61, 0.5)');
    ellipse( 0, 0, 100 );
    noStroke();
    fill( 40, 127 );
    arc( 0, 15, 75, 50, 0, PI );
    ellipse( -20, -15, 20 );
    ellipse( 20, -15, 20 );
}
