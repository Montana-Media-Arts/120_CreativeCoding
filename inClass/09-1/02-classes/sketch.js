
var bg_color = '#d78fca';

var objArray = [];

function setup() {
    createCanvas(800,600);
    background(bg_color);

    for (var i = 0; i < 10; i++) {
        objArray.push(
            new Happyface(0, random(height), random(100), random(20), randomColor())
        );
    }
}

function draw() {
    bg_render();

    for (var i = 0; i < objArray.length; i++) {
        objArray[i].display();
        objArray[i].move();
    }

}


function bg_render(){
    background(bg_color);
    for (var i = 20; i < width; i += 100) {
        for (var j = 20; j < height; j+=100) {
            fill('#b3b681');
            rect(i,j,60,60);
        }
    }
}


function randomColor(){
    return color(
        floor(random(255)),
        floor(random(255)),
        floor(random(255))
    );
}
