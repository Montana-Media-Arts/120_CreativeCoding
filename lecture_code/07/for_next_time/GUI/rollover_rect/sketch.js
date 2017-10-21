// Rollover Rect

var x = 250;
var y = 150;
var size = 100;

function setup() {
    createCanvas(windowWidth, 400);
}

function draw() {
    background(200);
    if ((mouseX > x) && (mouseX < x + size) && (mouseY > y) && (mouseY < y + size)) {
        fill(0);
    } else {
        fill(255);
    }
    rect(x, y, size, size);
}
