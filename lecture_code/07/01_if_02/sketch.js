function setup() {
    // createCanvas( windowWidth, windowHeight );
    createCanvas( windowWidth, 600 );
}

function draw() {
    background('white');

    // set the fill color for an ellipse
    if( false ) {
        fill('red');
    } else {
        fill('blue');
    }

    ellipse( width/2, height/2, 40 );
}
