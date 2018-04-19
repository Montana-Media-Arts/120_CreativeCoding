let img;

function preload() {
    img = loadImage('./images/buffalo.jpg');
}

function setup() {
    createCanvas( 640, 424 );
}

function draw() {
    background( img );
}
