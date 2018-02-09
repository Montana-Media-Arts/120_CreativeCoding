let pos_x;
let pos_y;
let point_width = 1;
let max_pos_mvt = 1;

function setup() {
    // createCanvas( windowWidth, windowHeight );
    createCanvas( windowWidth, 600 );
    background(255);

    // specify initial position to be center of canvas
    pos_x = width * 0.5;
    pos_y = height * 0.5;
}

function draw() {

    // draw the pos
    ellipse(pos_x, pos_y, point_width);

    // we want to randomly update the position of the pos
    pos_x += floor(random(-max_pos_mvt, max_pos_mvt + 1));
    pos_y += floor(random(-max_pos_mvt, max_pos_mvt + 1));
}
