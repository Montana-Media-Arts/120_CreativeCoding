var exy = 15;
var state = false;
var butt_diam = 10;
var butt_loc_x = 333;
var butt_loc_y = 460
var d = 20;

var person = {
    present: false,
    button_x: 640,
    button_y: 30,
    button_size: 40
};

function setup() {
    createCanvas(700, 700);
}

function draw() {
    background(0, 204, 204);

    fill(224, 224, 224);
    strokeWeight(1);
    rect(325, 0, 15, 650);
    rect(250, 650, 600, 50);
    rect(0, 10, 325, 15);

    fill(255, 222, 0);
    strokeWeight(1);
    rect(340, 250, 45, 5);
    rect(340, 220, 45, 5);
    rect(10, 5, 36, 70);
    rect(363, 218, 49, 49);
    rect(294, 78, 36, 70);

    rect(340, 290, 45, 5);
    rect(340, 320, 45, 5);
    rect(363, 290, 49, 49);


    fill(0);
    rect(367, 222, 42, 42);
    rect(297, 80, 30, 65);
    rect(13, 8, 30, 65);
    rect(367, 294, 42, 42);

    fill(32);
    rect(0, 670, 250, 35);

    fill(128, 128, 128);
    rect(325, 450, 15, 25);


    // draw person present button
    push();

    if (person.present) {
        fill(0, 255, 0);
    } else {
        fill(255);
    }
    rect(person.button_x, person.button_y, person.button_size, person.button_size );

    pop();

    if (state) {

        fill(255, 0, 0);
        ellipse(28, 23, exy, exy);
        ellipse(312, 93, exy, exy);

        strokeWeight(1);
        ellipse(389, 240, 5, 23);
        ellipse(383, 240, 5, 20);
        ellipse(394, 240, 5, 18);
        ellipse(399, 240, 5, 15);
        ellipse(380, 250, 15, 5);
        strokeWeight(0);
        ellipse(390, 250, 20, 15);



    } else {
        fill(0, 204, 0);
        ellipse(28, 60, exy, exy);
        ellipse(312, 133, exy, exy);

        fill(255);
        strokeWeight(1);
        rect(375, 310, 15, 5);
        rect(383, 323, 5, 10);
        rect(386, 310, 15, 5);
        rect(387, 323, 5, 10);
        rect(385, 310, 5, 15);
        ellipse(388, 304, 13, 13);
    }
    ellipse(butt_loc_x, butt_loc_y, butt_diam, butt_diam);
}

function mousePressed() {
    if (dist(mouseX, mouseY, butt_loc_x, butt_loc_y) < butt_diam / 2) {
        state = !state;
    }

    if( mouseX >= person.button_x &&
        mouseX <= person.button_x + person.button_size &&
        mouseY >= person.button_y &&
        mouseY <= person.button_y + person.button_size
    ) {
        person.present = !person.present;
    }
}
