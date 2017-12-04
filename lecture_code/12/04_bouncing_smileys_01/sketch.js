
let happyface = [];
let init_numHappyFaces = 2;
let bg_color;
let canCreateNewHappyFace = true;

function setup() {
    createCanvas(windowWidth,windowHeight);

    let init_x = 100;
    let init_y = 100;
    let init_size = random(40, 150);

    for (let i = 0; i < init_numHappyFaces; i++) {
        happyface.push(
            new Happyface(init_x, init_y, init_size, randomColor())
        );
        init_x += init_size + random(50, 150);
        if (init_x >= width) {
            init_x = 100;
            init_y += init_size + random(10, 30);
        }
        init_size = random(20, 150);
    }
}

function draw() {
    background(255, 255, 255, 5);

    canCreateNewHappyFace = true;

    for (let i = 0; i < happyface.length; i++) {
        happyface[i].frame(happyface, i);
    }

}

function randomColor() {
    return color( floor(random(256)), floor(random(256)), floor(random(256)) );
}


function createNewHappyFace(){
    for (let i = 0; i < 2; i++) {
        happyface.push(
            new Happyface(random(width), random(height), random(20, 150), randomColor())
        );
    }
}

function killHappyFace(idx){
    happyface.splice(idx, 1);
}
