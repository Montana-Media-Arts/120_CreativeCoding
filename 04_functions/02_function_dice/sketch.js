// Getting Started with p5.js
// Lauren McCarthy, Casey Reas, Ben Fry

function setup() {
  print("Ready to roll!");
  rollDice(20);
  rollDice(20);
  rollDice(6);
  print("Finished.");
}

function rollDice(numSides) {
  var d = 1 + int(random(numSides));
  print("Rolling... " + d);
}