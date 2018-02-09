function setup() {
    // createCanvas( windowWidth, windowHeight );
    createCanvas( windowWidth, 600 );
    // set a low frame rate so that you can see the change
    // frameRate is set to 0.5 frames per second
    // or 1 frame every 2 seconds.
    frameRate(0.5);
}

let conditionalValue = false;
function draw() {
    background('white');

    // set the fill color for an ellipse
    if( conditionalValue ) {
        fill('red');
    } else {
        fill('blue');
    }

    ellipse( width/2, height/2, 40 );


    // update the conditionalValue variable
    conditionalValue = true;
}
