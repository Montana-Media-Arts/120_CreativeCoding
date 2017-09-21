function BouncingBall(init_x, init_y, size, color){
    this.pos = { x: init_x, y: init_y };
    this.vel = { x: 1, y: 1 };
    this.size = size;
    this.rad = this.size * 0.5;
    this.color = color;
}

BouncingBall.prototype.display = function () {
    push();

    fill( this.color );

    translate( this.pos.x, this.pos.y );
    ellipse(0, 0, this.size, this.size);


    pop();
};

BouncingBall.prototype.move = function(){

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
