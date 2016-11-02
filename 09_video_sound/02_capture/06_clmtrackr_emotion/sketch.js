// For more: https://github.com/auduno/clmtrackr

var ctracker;
var emotionData;
var ec;

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

  
  ec = new emotionClassifier();
  ec.init(emotionModel);
  emotionData = ec.getBlank();  
  
  textSize(20);
}

function draw() {
  clear();
  var cp = ctracker.getCurrentParameters();
  var er = ec.meanPredict(cp);
  
  for (var i=0; i<er.length; i++) {
    text(er[i].emotion+' '+nfc(er[i].value, 2), 20, (i+1)*30);
  }
}