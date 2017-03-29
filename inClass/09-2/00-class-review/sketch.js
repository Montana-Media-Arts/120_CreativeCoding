
var happyface = [];
var init_numHappyFaces = 2;
var bg_color;
var canCreateNewHappyFace = true;

function setup() {
    createCanvas(windowWidth,windowHeight);

    // bg_color = color(0, 0, 0, );

    var init_x = 100;
    var init_y = 100;
    var init_size = random(40, 150);

    for (var i = 0; i < init_numHappyFaces; i++) {
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

    for (var i = 0; i < happyface.length; i++) {
        happyface[i].frame(happyface, i);
    }

}

function randomColor() {
    return color( floor(random(256)), floor(random(256)), floor(random(256)) );
}


function createNewHappyFace(){
    for (var i = 0; i < 2; i++) {
        happyface.push(
            new Happyface(random(width), random(height), random(20, 150), randomColor())
        );
    }
}

function killHappyFace(idx){
    happyface.splice(idx, 1);
}
