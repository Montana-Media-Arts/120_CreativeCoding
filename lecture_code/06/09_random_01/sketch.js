function setup() {
    createCanvas( windowWidth, 200 );
    frameRate(2);
}


function draw() {
    background( 'rgb(74, 52, 103)' );

    // get a new random number every frame
    let rand = random();

    // print the number to the canvas
    textSize(26);
    noStroke();
    fill(255);
    text( rand, 10, height/2 );
}
