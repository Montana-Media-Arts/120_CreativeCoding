var signal = [];
var songIDX = 0;
var fft;
var sel;
var music = ["galantis.runaway.mp3", "panic.gospel.mp3", "traum.mp3", "TheSound.mp3", "ChangingOfTheSeasons.mp3", "LightItUp.mp3", "ofthenight.mp3"];
var musicPath = "./Audio/";

//load starting song
function preload() {
  console.log( musicPath + music[0] ); //sets regular path to file where music is kept, loads mp3 file at music index
  signal[0] = loadSound( musicPath + music[0]);

}

function setup() {

  createCanvas(windowWidth,windowHeight);

  //creating selection box
  textAlign(CENTER);
  sel = createSelect();
  sel.position(10, 10);
  //inserting song names into the selection box
  sel.option('Runaway');
  sel.option('This Is Gospel');
  sel.option('Traum');
  sel.option('The Sound');
  sel.option('Changing of the Seasons');
  sel.option('Light It Up');
  sel.option('Of The Night');
  sel.changed(mySelectEvent);

  //  Audio Feature Extraction Setup
  signal[0].play();
  fft = new p5.FFT();

}

function draw() {

  blendMode(BLEND); //this becomes relevant later on when the blending mode is changed
  angleMode(DEGREES);
  background(0);

  //variables
  fft.analyze(); //fft is analyzed so that frequencies can be identified below
  /*
  Below I set each of the variables that I will
  use when I start buliding in the draw function.
  After initially being set, each of them is
  mapped to a new set of values so that they
  can be used when determining the qualities
  of the arcs within the sketch.
  /*/
  var bass = fft.getEnergy("bass");
  var treble = fft.getEnergy("treble");
  var lowMid = fft.getEnergy("lowMid");
  var mid = fft.getEnergy("mid");
  var highMid = fft.getEnergy("highMid");
  var centroid = fft.getCentroid();
  bass = map(bass,0,300,0,-360);
  treble = map(treble,0,200,0,-360);
  lowMid = map(lowMid,0,300,0,-360);
  mid = map(mid,0,250,0,-360);
  highMid = map(highMid,0,200,0,-360);
  centroid = map(centroid, 40, 10000, 0, -360);

  //BlendCircle
  push();
  blendMode(SCREEN); //change blending mode to create additive color on one set of arcs
  noStroke();
  //bass arc
  fill(0,0,255);
  arc(width/1.2,height/4, 300, 300, bass, HALF_PI);
  //mid arc
  fill(0,255,0);
  arc(width/1.2,height/4, 180, 180, mid, HALF_PI);
  //treble arc
  fill(255,0,0);
  arc(width/1.2,height/4, 60, 60, treble, HALF_PI);
  pop();


  //Sliding Circle
  push(); //isolate this style to this particular circle
  //bass arc
  noFill();
  strokeWeight(5);
  //centroid arc
  stroke(0,103,25);
  arc(width/5,height/4, 300, 300, centroid, centroid);
  //bass arc
  stroke(1,164,0);
  arc(width/5,height/4, 250, 250, bass, bass);
  //lowMid arc
  stroke(0,255,0);
  arc(width/5,height/4, 200, 200, lowMid, -lowMid);
  //mid arc
  stroke(150,255,34);
  arc(width/5,height/4, 150, 150, mid, mid);
  //highMid arc
  stroke(126,255,118);
  arc(width/5,height/4, 100, 100, highMid, -highMid);
  //treble arc
  stroke(20,255,121);
  arc(width/5,height/4, 50, 50, treble, -treble);
  pop(); //working with push


  //Rainbow Circle
  noStroke();
  //centroid arc
  fill(230,23,0);
  arc(width/2,height/4, 300, 300, centroid, HALF_PI);
  //bass arc
  fill(255,130,5);
  arc(width/2,height/4, 250, 250, bass, HALF_PI);
  //lowMid arc
  fill(242,223,0);
  arc(width/2,height/4, 200, 200, lowMid, HALF_PI);
  //mid arc
  fill(92,243,51);
  arc(width/2,height/4, 150, 150, mid, HALF_PI);
  //highMid arc
  fill(42,214,240);
  arc(width/2,height/4, 100, 100, highMid, HALF_PI);
  //treble arc
  fill(124,68,230);
  arc(width/2,height/4, 50, 50, treble, HALF_PI);

  /*
  The rainbow and opacity cirlces are laid over the top of each other.
  I was putting them into the sketch at the same time, and when they came in
  they were on top of each other, which creates the circle
  effect seen in the final sketch.
  /*/

  //Opacity circle
  push();
  //bass arc
  fill(255,50);
  strokeWeight(5);
  //centroid arc
  stroke(255,0,0);
  arc(width/2,height/4, 300, 300, centroid, HALF_PI);
  //bass arc
  stroke(0,0,255);
  arc(width/2,height/4, 250, 250, bass, HALF_PI);
  //lowMid arc
  stroke(0,255,0);
  arc(width/2,height/4, 200, 200, lowMid, HALF_PI);
  //mid arc
  stroke(255,255,0);
  arc(width/2,height/4, 150, 150, mid, HALF_PI);
  //highMid arc
  stroke(0,255,255);
  arc(width/2,height/4, 100, 100, highMid, HALF_PI);
  //treble arc
  stroke(255,0,255);
  arc(width/2,height/4, 50, 50, treble, HALF_PI);
  pop();

  //Opacity circle Separate
  push();
  //bass arc
  fill(255,50);
  strokeWeight(5);
  //centroid arc
  stroke(255,0,255);
  arc(width/3,height/1.5, 300, 300, centroid, HALF_PI);
  //bass arc
  stroke(0,0,255);
  arc(width/3,height/1.5, 250, 250, bass, HALF_PI);
  //lowMid arc
  stroke(0,255,0);
  arc(width/3,height/1.5, 200, 200, lowMid, HALF_PI);
  //mid arc
  stroke(255,255,0);
  arc(width/3,height/1.5, 150, 150, mid, HALF_PI);
  //highMid arc
  stroke(0,255,255);
  arc(width/3,height/1.5, 100, 100, highMid, HALF_PI);
  //treble arc
  stroke(255,0,0);
  arc(width/3,height/1.5, 50, 50, treble, HALF_PI);
  pop();

  //Rainbow Circle Separate
  noStroke();
  //centroid arc
  fill(230,23,0);
  arc(width/1.5,height/1.5, 300, 300, centroid, HALF_PI);
  //bass arc
  fill(255,130,5);
  arc(width/1.5,height/1.5, 250, 250, bass, HALF_PI);
  //lowMid arc
  fill(242,223,0);
  arc(width/1.5,height/1.5, 200, 200, lowMid, HALF_PI);
  //mid arc
  fill(92,243,51);
  arc(width/1.5,height/1.5, 150, 150, mid, HALF_PI);
  //highMid arc
  fill(42,214,240);
  arc(width/1.5,height/1.5, 100, 100, highMid, HALF_PI);
  //treble arc
  fill(124,68,230);
  arc(width/1.5,height/1.5, 50, 50, treble, HALF_PI);

  //words that need to be on the sketch
  fill(255);
  textAlign(RIGHT);
  textFont("Times");
  textSize(16);
  text("Sound in Motion", width-10, height-50);
  text("By Emily Griffin", width-10,height-30);
  text("Copyright 2016", width-10, height-10);
  textAlign(LEFT);
  text("Select New Song", 10,50);
  textSize(18);
  text("Music:", width/30, height-145);
  textSize(16);
  text("Galantis - Runaway", width/30, height-125)
  text("Panic! At The Disco - This Is Gospel", width/30, height-105);
  text("Cro - Traum", width/30, height-85);
  text("The 1975 - The Sound", width/30, height-65);
  text("Two Door Cinema Club - Changing of the Seasons", width/30, height-45);
  text("Major Lazer - Light It Up", width/30, height-25);
  text("Bastille - Of The Night", width/30, height-5);

}
//choosing the selected song
function mySelectEvent() {
  var item = sel.value();
  if (item === "Runaway") {
    songIDX = 0; //Runaway is at song index 0 (and etc. for following files)
  } else if (item === "This Is Gospel") {
    songIDX = 1;
  } else if (item === "Traum") {
    songIDX = 2;
  } else if (item === "The Sound") {
    songIDX = 3;
  } else if (item === "Changing of the Seasons") {
    songIDX = 4;
  } else if (item === "Light It Up") {
    songIDX = 5;
  } else if (item === "Of The Night") {
    songIDX = 6;
  }
  /*
    BELOW: If nothing is selected, then load the song index.
    Otherwise, pause the current song and jump to
    the beginning of the newly selected song.
  /*/
  if ( signal[songIDX] == null ) {
    signal[songIDX] = loadSound(musicPath + music[songIDX], loadNewSong);
  } else {
    loadNewSong();
  }
}

//loading a new song
function loadNewSong() {
  for (var i = 0; i < signal.length; i++) {
    if (signal[i] != null) {
      signal[i].pause();
    }
  };
  signal[songIDX].loop();
  signal[songIDX].jump(0);
}
