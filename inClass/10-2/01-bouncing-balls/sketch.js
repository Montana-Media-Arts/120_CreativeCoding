
var balls = [];
var num_of_balls = 10;
var bg_color = '#323338';

function setup() {
    createCanvas(windowWidth,windowHeight);


}

function draw() {
    background(bg_color);


    for (var i = 0; i < balls.length; i++) {
        balls[i].display();
        balls[i].move();
        balls[i].collisionCheck(balls, i);
        mouseCollision(balls[i], i);
    }

    if (balls.length < 1) {
        spawnBalls();
    }

}


function spawnBalls(){
    for (var i = 0; i < random(2, 40); i++) {
        balls.push( new BouncingBall(
            random(width),
            random(height),
            random(80, 180),
            randColor(),
            random(0, 5)
        ));
    }
}

function mouseCollision(ball, idx){
    var collision = false;

    var distance = dist(ball.pos.x, ball.pos.y, mouseX, mouseY);

    if (distance <= ball.rad) {
        collision = true;
    }
    if (collision) {
        balls.splice(idx,1);
    }
}


function randColor(){
    return color( floor(random(255)), floor(random(255)), floor(random(255)) );
}
