
// Create a person object
person = {
    location_x: 0,
    location_y: 0,
    width: 60,
    height: 120,
    eye_size: 20,
    eye_color: 0,
    color: 0,
};


function setup() {
    createCanvas(800,600);
    background(240);

    // define person parameters that rely on p5
    person.location_x = width / 2;
    person.location_y = height - person.height / 2;

    person.color = color(10, 20, 230);
    person.eye_color = color(0, 255, 0);
}

function draw() {
    background(240);

    // draw person
    push();

    translate(person.location_x, person.location_y);

    fill(person.color);

    rectMode(CENTER);
    rect(0, 0, person.width, person.height);

    // eyes
    fill(person.eye_color);
    ellipse(-person.eye_size*0.8, -(person.height * 0.25), person.eye_size, person.eye_size);
    ellipse(person.eye_size*0.8, -(person.height * 0.25), person.eye_size, person.eye_size);

    pop();

}
