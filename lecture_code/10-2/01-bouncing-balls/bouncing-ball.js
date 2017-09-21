function BouncingBall(init_x, init_y, size, color, maxSpeed){
    this.pos = { x: init_x, y: init_y };
    this.vel = { x: 0, y: 0 };
    this.acc = { x: 0, y: 0 };
    this.size = size;
    this.rad = this.size * 0.5;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.maxAccSpeed = map(this.size, 40, 120, 1, 0.1);
}

BouncingBall.prototype.display = function () {
    push();

    fill( this.color );

    translate( this.pos.x, this.pos.y );
    ellipse(0, 0, this.size, this.size);


    pop();
};

BouncingBall.prototype.move = function(){

    // get the ball, to track, the mouse
    // This means we need to set velocity
    // in relation to the mouse position
    this.acc.x = mouseX - this.pos.x;
    this.acc.x = constrain(this.acc.x,-this.maxAccSpeed,this.maxAccSpeed);
    this.vel.x += this.acc.x;
    this.vel.x = constrain(this.vel.x,-this.maxSpeed,this.maxSpeed);

    this.acc.y = mouseY - this.pos.y;
    this.acc.y = constrain(this.acc.y,-this.maxAccSpeed,this.maxAccSpeed);
    this.vel.y += this.acc.y;
    this.vel.y = constrain(this.vel.y,-this.maxSpeed,this.maxSpeed);


    // update position
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;

    // edge check
    if (this.pos.x >= width) {
        this.pos.x = width - this.vel.x;
        this.vel.x *= -1;
    } else if (this.pos.x <= 0) {
        this.pos.x = 1 + this.vel.x;
        this.vel.x *= -1;
    }

    if (this.pos.y >= height) {
        this.pos.y = height - this.vel.y;
        this.vel.y *= -1;
    } else if (this.pos.y <= 0) {
        this.pos.y = 1 + this.vel.y;
        this.vel.y *= -1;
    }
}


BouncingBall.prototype.collisionCheck = function(ballArr, myIdx){
    var maxDist, distance, otherBall;


    for (var i = 0; i < ballArr.length; i++) {

        var collision = false;

        otherBall = ballArr[i];

        if (i !== myIdx) {
            distance = dist(this.pos.x, this.pos.y, otherBall.pos.x, otherBall.pos.y);
            maxDist = this.rad + otherBall.rad;

            if (distance <= maxDist) {
                collision = true;
            }

            if (collision) {
                this.vel.x *= -1;
                this.vel.y *= -1;
            }

        }

    }
}
