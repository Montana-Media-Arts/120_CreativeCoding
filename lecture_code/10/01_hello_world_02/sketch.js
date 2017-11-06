function setup(){
    createCanvas( windowWidth, 400 );
}

function draw() {
    background( 'rgb(91, 255, 147)' );

    // call our newly defined function
    drawCircle();
}

// Our newly defined function
function drawCircle() {
    fill( 'grey' );
    noStroke();
    ellipse( 150, 150, 150 );
}
