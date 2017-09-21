var bg_color;

function setup() {
    createCanvas(windowWidth,windowHeight);
    bg_color = color(230, 240, 200);
    background(bg_color);
    frameRate(2);
}

function draw() {

    background(bg_color);

    for (var i = 0; i < width/6; i++) {
        drawPerson(i*(width/6), random(0, height));

    }
    // a function to draw a person


}



////////// Function to Draw A "Person" ////////////
function drawPerson(x, y){
    var pos_x = x;
    var pos_y = y;
    var person_width = 80;
    var person_height = 200;
    var eye_ratio = 0.2;

    // draw the person
    push();

    translate(pos_x,pos_y);

    rectMode(CENTER);
    fill(0, 10, 244);
    rect(0, -person_height * 0.5, person_width, person_height);

    fill(244, 10, 0);
    ellipse(-person_width * 0.3, -person_height * 0.1, person_width*eye_ratio, person_width*eye_ratio);
    ellipse(person_width * 0.3, -person_height * 0.1, person_width*eye_ratio, person_width*eye_ratio);

    pop();
}
