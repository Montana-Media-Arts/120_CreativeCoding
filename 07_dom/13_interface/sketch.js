// ICM 2015
// DOM Manipulation
// https://github.com/ITPNYU/ICM-2015

var divs = [];
var slider;
var checkbox;
var dropdown;
var input;

function setup() {
  noCanvas();

  // Make a button from a div
  var divButton = createButton('make a div');
  divButton.mousePressed(makeDiv);

  // Make a slider
  slider = createSlider(1, 48, 12);

  // Make a checkbox
  checkbox = createCheckbox('red');

  // Make a dropdown menu
  dropdown = createSelect();
  dropdown.option('date');
  dropdown.option('random number');

  // Make a text input
  input = createInput('your name');

  // Make a button
  var clearButton = createButton('clear');
  clearButton.mousePressed(clearDivs);
}

// Call remove() on all new divs added
function clearDivs() {
  for (var i = 0; i < divs.length; i++) {
    divs[i].remove();
  }
}

// Make a new div
function makeDiv() {
  var div;

  // Check the dropdown
  if (dropdown.selected() === 'date') {
    div = createDiv(input.value() + ', this div was made at ' + Date());
  } else {
    div = createDiv(input.value() + ', here\'s a random number: ' + floor(random(100)));
  }
  // User the slider for font size
  div.style('font-size', slider.value() + 'pt');

  // Check the checkbox
  if (checkbox.checked()) {
    div.style('background-color', '#D00');
  }

  divs.push(div);
}

