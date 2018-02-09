function setup() {
    // createCanvas( windowWidth, windowHeight );
    createCanvas( windowWidth, 600 );
    frameRate(20);
}

function draw() {
    let red = floor( random(256) );
    let green = floor( random(256) );
    let blue = floor( random(256) );
    background( red, green, blue );
}
