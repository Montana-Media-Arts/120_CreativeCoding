function setup() {
    // createCanvas( windowWidth, windowHeight );
    createCanvas( windowWidth, 600 );
}

function draw() {
    if ( mouseIsPressed ) {
        background( random(255), random(255), random(255) );

        noStroke();
        fill( random(255), random(255), random(255) );
        ellipse(
            random(width),
            random(height),
            random(width),
            random(height)
        );
    } else {
        background('rgb(180, 135, 99)');
        fill('rgb(116, 126, 91)');
        textSize(36);
        textAlign(CENTER);
        text("boring...", width/2, height/2);
    }
}
