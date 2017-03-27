
var bg_color = '#d78fca';

var happyfaces = [];

function setup() {
    createCanvas(800,600);
    background(bg_color);

    for (var i = 0; i < 1000; i++) {
        happyfaces.push(
            new Happyface(random(width), random(height), random(100), random(10) )
        );
    }
}

function draw() {
    background(bg_color);

    for (var i = 0; i < happyfaces.length; i++) {
        happyfaces[i].display();
        happyfaces[i].move();
    }

}
