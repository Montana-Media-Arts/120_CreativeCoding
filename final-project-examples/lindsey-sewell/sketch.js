var bugs = [];
var num = 350;
var song;
var sound, amplitude, cnv;
var fft;



function preload(){
img = loadImage('summernight2.jpg');
song = loadSound('fireflies.mp3');
}

function mouseClicked() {
  if (song.isPlaying() ){
      song.pause();
    } else {
      song.play();
    }

}


function setup() {


createCanvas(windowWidth, windowHeight);
 amplitude = new p5.Amplitude();

  fft = new p5.FFT(0.2, 16);

bg = img;

    for (var i = 0; i < num; i++) {
        bugs.push( new Bug(
            random(width),
            random(height),
            random(10),
            randColor()
        ));
    }
}


function draw() {

  background(bg);  //bg


var level = amplitude.getLevel();
// console.log(level);
var bands = fft.analyze();

var low = (bands[0] + bands[1] + bands[2]) / 3;
// console.log(low);

    for (var i = 0; i < bugs.length; i++) {
        bugs[i].ampoffset = level;
        bugs[i].display();
        bugs[i].move();
        bugs[i].collisionCheck(bugs, i);

        if (i%3 == 0) {
          bugs[i].sizeAdj = constrain(map(low, 200, 300, 1, 3), 0, 3);
        }
    }
    // your firefly
    push();
    noStroke();
    fill(0, 200, 255);
    ellipse(mouseX, mouseY, 10, 10);
    fill(0, 250, 250, 50);
    ellipse(mouseX, mouseY, 20, 20);
    pop();
}
function randColor(){
return color( floor(random(200, 255)), floor(random(100, 255)), floor(random(0)) );
}
