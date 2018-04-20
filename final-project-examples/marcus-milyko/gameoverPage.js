function endGamePage() {
  background(0);
  restartButton();
  instructions();
  resetVars();
  ambientTheme.stop();
  // Reset all enemy arrays and variables back to original.
}

function restartButton() {
  // Creates a Button with the word Restart
  fill(205, 15, 15);
  rectMode(CENTER);
  rect(width / 2, height / 2, 400, 160);
  fill(wordRed, wordGreen, wordBlue);
  // Need to better place the text
  textSize(85);
  text('Restart?', width / 2, height / 2 + 25);
  text('Score:', width/ 2, height * 3/4 - 25);
  text(totalCollected, width / 2, height * 4/5 + 20);
  colorShift();
}

function resetVars() {
  // Reset all variables to the starting state
  charX = 475;
  charY = centY - 75;
  pathed = [];
  timer = 300;
  timerShift = 0;
  standStill = false;
  jump = false;
  grounded = true;
  collect = true;
  jump = false;
  jumpTimer = 27;
  phase1 = false;
  boss = false;
  bossLimit = 10;
  bossHealth = 10;
  bossTimer = 30;
  attackTimer = 300;
  attacking = false;
  prepareAttack = false;
  platformAttacked = 0;
  resetPlatformColors();
  bossBottom = false;
  bossMid = false;
  bossMidPair = false;
  bossTopPair = false;
  bossTop = false;
  angry = false;
  bossY = 800;
}