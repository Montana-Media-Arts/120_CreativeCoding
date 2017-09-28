function setup() {
    createCanvas( 200,200 );

    // create a pixel grid
    // stroke(200);
    // strokeWeight(10);
    noStroke();
    fill(200);
    for (var x = 0; x < 20; x++) {
        for (var y = 0; y < 20; y++) {
            if (x % 2 === 0) {
                if (y % 2 === 0) {

                    rect( x*10, y*10, 10, 10 );
                }
            } else {
                if (y % 2 === 1) {
                    rect( x*10, y*10, 10, 10 );
                }
            }
        }
    }

    // create the circle
    noFill();
    stroke(0);
    strokeWeight(10);
    // point( 10, 10 );
    ellipse( 10*10, 10*10, 15*10 );

}
