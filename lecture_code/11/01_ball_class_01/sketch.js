// Ball Class Example
// Week 11


// create a variable for the ball object
let ball;

function setup() {
    // createCanvas(windowWidth, windowHeight);
    createCanvas(windowWidth, 800);

    // create a new ball object of class type "Ball"
    ball = new Ball(width / 2, height / 2, 50, 'red');
}

function draw() {
    background(0);

    // call the ball's methods
    ball.display();
    ball.move();
    ball.edgeCheck();
}


//////////////////////////////////////////////////
//      BALL CLASS DEFINITION
//////////////////////////////////////////////////
class Ball {
    constructor(x, y, size, color) {
        this.color = color;
        this.size = size;
        this.rad = this.size / 2;
        this.posX = x;
        this.posY = y;
        this.deltaX = random(-2, 2);
        this.deltaY = random(-2, 2);
    }

    display() {
        push();
        // remove the balls outer stroke
        noStroke();
        // set the balls fill color
        fill(this.color);
        // set the position of the ball
        translate(this.posX, this.posY);
        ellipse(0, 0, this.size);
        pop();
    }

    move() {
        this.posX += this.deltaX;
        this.posY += this.deltaY;
    }

    edgeCheck() {
        // check if the ball has hit a vertical wall (left or right walls)
        if (this.posX + this.rad >= width || this.posX - this.rad <= 0) {
            this.deltaX *= -1;
        }
        // check if the ball has hit a horizontal wall (top or bottom walls)
        if (this.posY + this.rad >= height || this.posY - this.rad <= 0) {
            this.deltaY *= -1;
        }
    }
}
