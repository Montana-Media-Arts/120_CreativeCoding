var bg_color = '#c98d50';

var whatever;

function setup() {
    createCanvas(windowWidth,windowHeight);
    background(bg_color);

    whatever = new Bird(random(width), random(height), random(20,100));
    console.log(whatever);
}

function draw() {
    background(bg_color);

    whatever.display();
    whatever.move();


}
