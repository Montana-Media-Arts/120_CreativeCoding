
function setup() {
    createCanvas( windowWidth, windowHeight );
}


function draw() {
    background( 'rgb(0, 6, 87)' );
    textSize(36);
    noStroke();
    fill('white');
    text("'mouseX': " + mouseX, 10, 40 );
    text("'mouseY': " + mouseY, 10, 80 );
}
