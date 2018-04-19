let img;

function preload() {
    img = loadImage('./images/buffalo.jpg');
}

function setup() {
    createCanvas( windowWidth, 600 );
}

function draw() {
    background( img );
}
