function setup() {
    createCanvas( windowWidth, windowHeight );
    frameRate(20);
}

function draw() {
    var red = floor( random(256) );
    var green = floor( random(256) );
    var blue = floor( random(256) );
    background( red, green, blue );
}
