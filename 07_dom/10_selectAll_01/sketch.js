// ICM 2015
// DOM Manipulation
// https://github.com/ITPNYU/ICM-2015

// Creating other HTML elements, adding style.

var ellPosx = [10, 30, 100, 200, 400, 440, 600, 700];

function setup() {
  createCanvas(800, 400);
  background(200,0,0);

  for( var i=0; i<ellPosx.length; i++ ){
    ellipse( ellPosx[i],200,20,20);
  }


}

function draw(){
}

function shuffleApples() {
}
