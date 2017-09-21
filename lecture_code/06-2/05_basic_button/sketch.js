/* Create a basic GUI element - AKA. Button */

var button = {};

function setup() {
    createCanvas(800,400);
    background(255);

    button.x = width / 2;
    button.y = height / 2;
    button.width = 100;
    button.height = 50;
    button.color_a = color(20, 40, 60);
    button.color_d = color(200, 40, 200);
    button.text = "My Button!";
}

function draw() {
    background(255);

    if (mouseX >= button.x - button.width/2 && mouseX <= button.x + button.width/2 && mouseY >= button.y - button.height/2 && mouseY <= button.y + button.height/2) {
        fill(button.color_a);
        if( mouseIsPressed ){
            background(40, 178, 200);
        }
    } else {
        fill(button.color_d);
    }
    rectMode(CENTER);
    rect(button.x,button.y,button.width,button.height);


    fill(255);
    textSize(20);
    text(button.text, button.x-45, button.y);

}
