// declare a variable named "quarter_width"
let quarter_width;

function setup() {
    createCanvas(400, 200);

    // assign "quarter_width" to have a value,
    // based on the p5 variable "width"
    quarter_width = width * 0.5;
}

function draw() {
    // use "quarter_width"
    ellipse( quarter_width, 20, 40 );
}
