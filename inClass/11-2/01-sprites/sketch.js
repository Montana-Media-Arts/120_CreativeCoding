
var cats = [];
var cat_img;
var bg = '#b17cc9';

function preload() {
    cat_img = loadImage("./imgs/runningcat.png");
}


function setup() {
    createCanvas(windowWidth,windowHeight);
    background(bg);
    cats[0] = new Cat(100, 100, cat_img, 0);
    cats[1] = new Cat(1000, 100, cat_img, 1);
}

function draw() {
    background(bg);

    for (var i = 0; i < cats.length; i++) {
        cats[i].frame();
    }

}


function mousePressed() {
}
