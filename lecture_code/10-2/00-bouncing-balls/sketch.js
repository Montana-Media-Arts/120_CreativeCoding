
var balls = [];
var num_of_balls = 50;
var bg_color = '#323338';

function setup() {
    createCanvas(windowWidth,windowHeight);

    for (var i = 0; i < num_of_balls; i++) {
        balls.push( new BouncingBall(
            random(width),
            random(height),
            random(40, 80),
            randColor()
        ));
    }
}

function draw() {
    background(bg_color);


    for (var i = 0; i < balls.length; i++) {
        balls[i].display();
        balls[i].move();
        balls[i].collisionCheck(balls, i);
    }
}


function randColor(){
    return color( floor(random(255)), floor(random(255)), floor(random(255)) );
}
