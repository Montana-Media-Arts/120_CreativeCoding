/**
 * @Author: Michael Musick <michaelmusick>
 * @Date:   10-20-2017
 * @Email:  michael.musick@umontana.edu
 * @Last modified date: 10-20-2017
 */


function setup() {
    createCanvas(windowWidth, 300);
}


// using 'let' instead of 'let'
let pos_x = 0;
let pos_y = 0;
let d = 30;
let r = d / 2;

function draw() {
    background('rgb(3, 78, 115)');

    // define drawing parameters
    fill(255);
    noStroke();

    // circle 0
    pos_x = width * 0 / 10 + r;
    ellipse(pos_x, pos_y, d);

    // circle 1
    pos_x = width * 1 / 10 + r;
    ellipse(pos_x, pos_y, d);

    // circle 2
    pos_x = width * 2 / 10 + r;
    ellipse(pos_x, pos_y, d);

    // circle 3
    pos_x = width * 3 / 10 + r;
    ellipse(pos_x, pos_y, d);

    // circle 4
    pos_x = width * 4 / 10 + r;
    ellipse(pos_x, pos_y, d);

    // circle 4
    pos_x = width * 4 / 10 + r;
    ellipse(pos_x, pos_y, d);

    // circle 5
    pos_x = width * 5 / 10 + r;
    ellipse(pos_x, pos_y, d);

    // circle 6
    pos_x = width * 6 / 10 + r;
    ellipse(pos_x, pos_y, d);

    // circle 7
    pos_x = width * 7 / 10 + r;
    ellipse(pos_x, pos_y, d);

    // circle 8
    pos_x = width * 8 / 10 + r;
    ellipse(pos_x, pos_y, d);

    // circle 9
    pos_x = width * 9 / 10 + r;
    ellipse(pos_x, pos_y, d);

    pos_y++;
    if (pos_y > height) {
        pos_y = 0;
    }
}
