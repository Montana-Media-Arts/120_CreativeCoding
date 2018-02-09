
function setup() {
    // createCanvas( windowWidth, windowHeight );
    createCanvas( windowWidth, 600 );
}


function draw() {
    background( 'rgb(0, 6, 87)' );
    textSize(36);
    noStroke();
    fill('white');
    text("'mouseX': " + floor(mouseX), 10, 40 );
    text("'mouseY': " + floor(mouseY), 10, 80 );
}
