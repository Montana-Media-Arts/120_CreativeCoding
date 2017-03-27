
var bg_color = '#d78fca';

var happy1;

function setup() {
    createCanvas(800,600);
    background(bg_color);

    happy1 = new Happyface(random(width), random(height), random(100), random(10));

}

function draw() {
    background(bg_color);

    happy1.display();
    happy1.move();

}
