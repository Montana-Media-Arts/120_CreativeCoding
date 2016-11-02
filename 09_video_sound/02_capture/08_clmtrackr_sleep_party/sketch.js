var ctracker;

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

}

function draw() {

  // get array of face marker positions [x, y] format
  var positions = ctracker.getCurrentPosition();
  if(positions.length > 0) {
    var mouthH = positions[57][1] - positions[60][1];
    var leftEyeH = positions[26][1] - positions[24][1];
    var rightEyeH = positions[31][1] - positions[29][1];
    var faceH = positions[7][1] - positions[33][1];
    
    var mouthR = mouthH/faceH;
    var leftEyeR = leftEyeH/faceH;
    var rightEyeR = rightEyeH/faceH;

    var t = leftEyeR > 0.075 ? "Let's party!" : "I'm sleepy.";

    if (mouthR > 0.1) {
      var u = new SpeechSynthesisUtterance(t);
      speechSynthesis.speak(u);
    } else {
      speechSynthesis.cancel();
    }

  }
}