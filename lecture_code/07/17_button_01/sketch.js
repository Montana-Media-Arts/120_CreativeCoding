function setup() {
    createCanvas( windowWidth, 400 );
}


function draw() {
    background( 0 );
    stroke( 255 );
    strokeWeight( 4 );
    noFill();

    if( mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250 ) {
        if( mouseIsPressed ) {
            background(0, 255, 0);
        }
        fill(255, 0, 200);
    }

    rectMode(CENTER);
    rect(300, 200, 100, 100);
}
