// Scramble what the user enters into a text field

// Some HTML
var words;
var y_info;

var x;
var y;
var xspeed = 5;
var yspeed = -2;

var gravity = 1;

var fsize = 48;

var locked = false;

function setup() {
  noCanvas();

  y_info = createP();

  words = createDiv("p5");
  words.style('padding', '24px');
  words.style('background-color', '#F0C');
  words.style('font-family', 'monospace');
  words.style('font-size', "24pt");
  words.style('color', '#FFF');
  words.mousePressed(catchIt);
  words.mouseReleased(releaseIt);

  x = windowWidth/2;
  y = windowHeight/4;

}

function catchIt() {
  locked = true;
}

function releaseIt() {
  locked = false;
}

function draw() {
  // Set position and style
  if (locked) {
    x = mouseX;
    y = mouseY;
  } else {
    // Bouncing ball algorithm!
    x += xspeed;
    y += yspeed;

    if (x > windowWidth || x < 0) {
      xspeed *= -1;
    }
    if (y > windowHeight) {
      yspeed *= -1;
      words.position(x,windowHeight-100);
    }

    yspeed += gravity;
  }

  words.position(x,y-100);


  y_info.html('window height: ' + windowHeight + " <br/> y: " + y + " <br/> yspeed: " + yspeed);

}
