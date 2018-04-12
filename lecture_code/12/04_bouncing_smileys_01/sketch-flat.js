
let happyface = [];
let init_numHappyFaces = 2;
let bg_color;
let canCreateNewHappyFace = true;

function setup() {
    createCanvas(windowWidth,800);

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




/////////////////////////////////////////////////////
// Happy Face
/////////////////////////////////////////////////////

class Happyface {

    // Constructor Method
    constructor(init_x, init_y, size, color) {
        // Parameters
        this.loc = {
            x: init_x,
            y: init_y
        };
        this.size = size;
        this.rad = this.size * 0.5;
        this.angle = 0;
        this.color = color;
        this.eye = {
            x: this.size * 0.2,
            y: this.size * -0.33,
            size: this.size * random(0.2, 0.4)
        };
        this.mouth = {
            y: this.size * 0.5 * 0.15,
            width: this.size * 0.75,
            height: this.size * 0.45,
            color: '#000'
        };
        this.delta = {
            x: map(this.size, 40, 150, 10, 0.5) * map(round(random(1, 2)), 1, 2, -1, 1),
            y: 0,
            gravity: 0.1
        };
    }


    frame(objArr, myIdx) {
        this.bounce();
        this.checkCollisions(objArr, myIdx);
        this.display();
    }


    display() {
        push();
        translate(this.loc.x, this.loc.y);
        rotate(this.angle);

        fill(this.color);

        noStroke();
        ellipse(0, 0, this.size, this.size);

        push();
        fill('#fff');
        ellipse(-this.eye.x, this.eye.y, this.eye.size, this.eye.size);
        fill('#000');
        ellipse(-this.eye.x, this.eye.y, this.eye.size * 0.25, this.eye.size * 0.25);
        pop();
        push();
        fill('#fff');
        ellipse(this.eye.x, this.eye.y, this.eye.size, this.eye.size);
        fill('#000');
        ellipse(this.eye.x, this.eye.y, this.eye.size * 0.25, this.eye.size * 0.25);
        pop();

        fill(this.mouth.color);
        arc(0, this.mouth.y, this.mouth.width, this.mouth.height, 0, PI, CHORD);
        pop();
    }


    bounce() {
        // move horizontally
        this.loc.x += this.delta.x;
        if (this.loc.x + this.rad >= width) {
            this.loc.x = width - 1 - this.rad;
            this.delta.x *= -1;
        } else if (this.loc.x - this.rad <= 0) {
            this.loc.x = 1 + this.rad;
            this.delta.x *= -1;
        }

        // Vertical Bounce
        this.delta.y += this.delta.gravity;
        this.loc.y += this.delta.y;
        if (this.loc.y + this.rad >= height) {
            this.loc.y = height - 1 - this.rad;
            this.delta.y *= 0.9;
            this.delta.y *= -1;
        }
    }


    checkCollisions(objArr, myIdx) {
        for (var i = 0; i < objArr.length; i++) {
            if (myIdx !== i) {
                var obj = objArr[i];
                var objDist = dist(this.loc.x, this.loc.y, obj.loc.x, obj.loc.y);
                var maxDist = this.rad + obj.rad;
                if (objDist <= maxDist) {
                    this.delta.x *= -1;
                    this.delta.y *= -1;
                    if (canCreateNewHappyFace) {
                        createNewHappyFace();
                        canCreateNewHappyFace = false;
                    }
                    killHappyFace(myIdx);
                }
            }
        }
    }

}
