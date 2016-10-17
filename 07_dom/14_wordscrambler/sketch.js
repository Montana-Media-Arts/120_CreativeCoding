// ICM 2015
// DOM Manipulation
// https://github.com/ITPNYU/ICM-2015

// This uses string parsing which we'll cover more
// specifically when we look at data

// The scrambled text
var scrambled = '';

// The user input
var input;

function setup() {
  noCanvas();
  
  // Grab the text field
  input = select('#input');

  // A Grab the button
  var go = select('#button');
  // Set up a function to handle when the button is pressed
  go.mousePressed(generate);
  
  // A paragraph element for the scrambled text
  scrambled = select('#scrambled');
}

function generate() {
  // Clear the scrambled text
  var scrambledtext = '';

  // What has the user entered?
  var text = input.value();
  // Check to see if they entered something
  var len = text.length;
  if (text.length === 0) {
    alert('Enter something!');
  } else {
    // If they did, scramble up the text using string parsing
    for (var i = 0; i < len; i++) {
      var which = floor(random(text.length));
      scrambledtext += text.charAt(which);
      // Remove what was already used
      text = text.substring(0,which) + text.substring(which+1,text.length);
    }
    // Update the result
    scrambled.html(scrambledtext);
  }
}
