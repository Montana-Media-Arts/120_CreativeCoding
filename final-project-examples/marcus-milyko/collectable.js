var collectableSprite
var xPositions = [100, 200, 300, 400, 600, 700, 800, 900];
var yPositions = [108, 256, 404, 556, 736];
var XPlace = 0;
var YPlace = 0;
var oldXPlace = 0;
var oldYPlace = 0;
var totalCollected = 0;
var killNumber = 0;

function drawCollect() {
  image(collectableSprite, xPlace - 18, yPlace - 18);
  if (collect) {
    generateCollectLocation();
  }
  drawScore();
}

function drawScore() {
  // Displays Score
  textSize(80);
  fill(50, 60, 190);
  text(totalCollected, width / 2, 70)
}

function generateCollectLocation() {
  // Places collectable -- has a do {} while () loop to ensure the collectables don't few in a few choice locations.
  getPosition();
  do {
    getPosition();
  } while (xPlace == 100 && yPlace == 736 || xPlace == 900 && yPlace == 736 || (oldXPlace == xPlace && oldYPlace == YPlace));
  collect = false;
  oldXPlace = xPlace;
  oldYPlace = yPlace;
}

function getPosition() {
  xPlace = random(xPositions);
  yPlace = random(yPositions);
}

function checkCollect() {
  if (charX + charWidth >= xPlace - 18 && charX <= xPlace + 18 && charY <= yPlace + 18 && charY + charHeight >= yPlace - 18) {
    totalCollected++;
    collect = true;
    collectableCollected.play();
    if (boss) {
      damageBoss();
    } else {
      killEnemies();
    }
  }
}

function killEnemies() {
  // Kills enemies when executed
  pathed.splice(0, 1);
}

function damageBoss() {
  // Deals Damage to boss and Calls for Death after Health === 0
  bossHealth -= 1;
  if (bossHealth === 0) {
    boss = false;
    prepareAttacking = false;
    attacking = false;
    attackTimer = 300;
    attackingTimer = 300;
    resetPlatformColors();
    bossHealth = 15;
    bossBottom = false;
    bossMid = false;
    bossMidPair = false;
    bossTopPair = false;
    bossTop = false;
    angry = false;
    bossDeath();
  }
}