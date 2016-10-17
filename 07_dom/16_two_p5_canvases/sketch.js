// ICM 2015
// DOM Manipulation
// https://github.com/ITPNYU/ICM-2015

// create first sketch
var s0 = function(p) {

  p.setup = function() {
    p.createCanvas(200, 200);
  }

  p.draw = function() {
    p.background(200);
    p.ellipse(p.width/2, p.height/2, 20, 20);
  }
};

// start it running
var mysketch0 = new p5(s0);


// create second sketch
var s1 = function(p) {

  p.setup = function() {
    p.createCanvas(200, 200);
  }

  p.draw = function() {
    p.background(200, 50, 150);
    for (var i=0; i<5; i++) {
      p.ellipse(50*i, p.height*0.25, 20, 20);
    }
  }
};

// start it running
var mysketch1 = new p5(s1);