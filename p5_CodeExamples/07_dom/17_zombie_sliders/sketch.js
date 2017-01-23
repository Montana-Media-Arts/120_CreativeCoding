// ICM 2015
// DOM Manipulation
// https://github.com/ITPNYU/ICM-2015

var offset = 0;
var sliders = [];

function setup() {
  noCanvas();
  // Make a whole bunch of sliders and fill an array
  for (var i = 0; i < 200; i++) {
    var slider = createSlider(0, 100, 50);
    sliders.push(slider);
  }
}

function draw() {
  // Set the position of each slider dynamically using map()
  for (var i = 0; i < sliders.length; i++) {
    // Arbitrary angle
    var angle = offset + i / 46;
    // Map sine function to range from 0 to 100 for slider
    var n = map(sin(angle), -1, 1, 0, 100);
    // Control the slider
    sliders[i].value(n);
  }
  offset += 0.1;
}



