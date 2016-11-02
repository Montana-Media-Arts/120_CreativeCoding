var ctracker;
var mouthSound;

function preload() {
  mouthSound = loadSound('scream.mp3');
}

function setup() {

  // setup camera capture
  var videoInput = createCapture(VIDEO);
  videoInput.size(400, 300);
  videoInput.position(0, 0);
  
  // setup canvas
  var cnv = createCanvas(400, 300);
  cnv.position(0, 0);

  // setup tracker
  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(videoInput.elt);

  mouthSound.loop();
  mouthSound.setVolume(0);
}

function draw() {
  clear();

  // get array of face marker positions [x, y] format
  var positions = ctracker.getCurrentPosition();
  if(positions.length > 0) {
    var mouthH = positions[57][1] - positions[60][1];
    var faceH = positions[7][1] - positions[33][1];
    var mouthR = mouthH/faceH;

    console.log(mouthR);

    if (mouthR > 0.1) {
      mouthSound.setVolume(10);
    } else {
      mouthSound.setVolume(0);
    }

  }

}