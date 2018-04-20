var wordBlue = 175;
var colorChange = 1;
var wordGreen = 125;
var wordRed = 75;

function startUpPage() {
  background(0);
  rectMode(CENTER);
  textAlign(CENTER);
}

function beginButton() {
  // Creates a Button with the word BEGIN
  fill(205, 15, 15);
  rect(width / 2, height / 2, 400, 160);
  fill(wordRed, wordGreen, wordBlue);
  textSize(85);
  text('BEGIN!', width / 2, height / 2 + 25);
  instructions();
  colorShift();
}

function colorShift() {
  // Changes the colors of the word to give it a flashing set of words
  wordBlue += colorChange;
  if (wordBlue == 225) {
    colorChange *= -1;
  } else if (wordBlue == 35) {
    colorChange *= -1;
  }
  wordRed += colorChange;
  if (wordRed == 225) {
    colorChange *= -1;
  } else if (wordRed == 35) {
    colorChange *= -1;
  }
  wordGreen += colorChange;
  if (wordGreen == 225) {
    colorChange *= -1;
  } else if (wordGreen == 35) {
    colorChange *= -1;
  }
}

function checkButtons() {
  // Checks for the start button/ restart button
  if (mouseX >= width / 2 - 200
  && mouseX <= width / 2 + 200
  && mouseY >= height / 2 - 80
  && mouseY <= height / 2 + 80) {
    for (var i = 0; i < 1; i++) {
      pathed[i] = (new PathedEnemy());
    }
    startup = false;
    failure = false;
    ambientTheme.loop();
    totalCollected = 0;
  }
}

function instructions() {
  fill(0, 0, 255);
  textSize(30);
  text('Grab the Swords to earn points!', width / 2, height * 1 / 9);
  text('Swords kill enemies and damage Bosses!', width / 2, height * 2 / 9);
  text('Fall off the bottom of the screen to appear at the top!', width / 2, height * 3 / 9);
}