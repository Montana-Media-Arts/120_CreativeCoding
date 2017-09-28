var grid_size = 30;

function setup() {
    createCanvas( grid_size*20,grid_size*20 );

    // create a pixel grid
    // stroke(200);
    // strokeWeight(10);
    noStroke();
    fill(200);
    for (var x = 0; x < 20; x++) {
        for (var y = 0; y < 20; y++) {
            if (x % 2 === 0) {
                if (y % 2 === 0) {

                    rect( x*grid_size, y*grid_size, grid_size, grid_size );
                }
            } else {
                if (y % 2 === 1) {
                    rect( x*grid_size, y*grid_size, grid_size, grid_size );
                }
            }
        }
    }

    // create the circle
    fill(255);
    stroke(0);
    strokeWeight(grid_size);
    // point( grid_size, grid_size );
    ellipse( 10*grid_size, 10*grid_size, 15*grid_size );

}
