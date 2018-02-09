let x = 300;
let speed = 5;

function setup() {
    createCanvas(windowWidth, 400);
}

function draw() {
    background(0);

    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(x, height / 2, 100, 100);

    if ( x > width || x < 0 ) {
        speed = speed * -1;
    }
    x = x + speed;
}
