
function setup() {
    createCanvas( windowWidth, windowHeight );
    background( 'rgb(255, 210, 94)' );
}


function draw() {
    noCursor();
    fill( 255 );
    ellipse( mouseX, mouseY, 40 );
}
