
let cats = [];
let cat_img;
let bg = '#b17cc9';

function preload() {
    cat_img = loadImage("./images/runningcat.png");
}


function setup() {
    createCanvas(windowWidth,windowHeight);
    background(bg);
    cats[0] = new Cat(100, 100, cat_img, 0);
    cats[1] = new Cat(1015, 100, cat_img, 1);
}

function draw() {
    background(bg);

    for (let i = 0; i < cats.length; i++) {
        cats[i].frame();
    }

}
