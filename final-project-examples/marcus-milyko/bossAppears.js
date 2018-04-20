bossHealth = 10;
bossHealthGain = 5;
platformChoices = [0, 1, 2, 3, 4];
platformAttacked = 5;
prepareAttack = false;
attacking = false;
attackTimer = 300;
attackingTimer = 300;
bossBottom = false;
bossMid = false;
bossMidPair = false;
bossTopPair = false;
bossTop = false;
bossY = 800;
drop = true;
angry = false;
bossDying = false;

function bossAttackTimer() {
  // Times the attack, eventually chooses the platform to attack
  attackTimer -= 1;
  if (attackTimer === 0) {
    prepareAttack = true;
    attackTimer = 755;
    platformAttacked = random(platformChoices)
  }
}

function bossAttack() {
  // Attacks the platform selected in bossAttackTimer()
  angry = true;
  if (platformAttacked === 0) {
    platBotRed += 1;
    platBotGreen = platAttackedGreen;
    platBotBlue = platAttackedBlue;
    bossBottom = true;
  } else if (platformAttacked == 1) {
    platCentRed += 1;
    platCentGreen = platAttackedGreen;
    platCentBlue = platAttackedBlue;
    bossMid = true;
  } else if (platformAttacked == 2) {
    platMidPairRed += 1;
    platMidPairGreen = platAttackedGreen;
    platMidPairBlue = platAttackedBlue;
    bossMidPair = true;
  } else if (platformAttacked == 3) {
    platTopPairRed += 1;
    platTopPairGreen = platAttackedGreen;
    platTopPairBlue = platAttackedBlue;
    bossTopPair = true;
  } else if (platformAttacked == 4) {
    platTopRed += 1;
    platTopGreen = platAttackedGreen;
    platTopBlue = platAttackedBlue;
    bossTop = true;
  }
  if (platBotRed == 255 || platCentRed == 255 || platMidPairRed == 255 || platTopPairRed == 255 || platTopRed == 255) {
    prepareAttack = false;
    attacking = true;
    angry = false;
  }
}

function bossAttackingTimer() {
  // While the attacking is damaging the player, this timer counts it down
  attackingTimer -= 1;
  if (attackingTimer === 0) {
    attacking = false;
    resetPlatformColors();
    bossBottom = false;
    bossMid = false;
    bossMidPair = false;
    bossTopPair = false;
    bossTop = false;
    attackingTimer = 300;
    bossTimer = 3600;
  }
}

function bossBounce() {
  // Causes the boss to move up and down during combat
  if (drop) {
    bossY += 1;
    if (bossY >= 60) {
      drop = false;
    }
  } else {
    if (bossY >= 100) {
      bossY -= 2;
    } else {
      bossY -= 1;
    }
    if (bossY <= -30) {
      drop = true;
    }
  }
}

function bossDeath() {
  bossDying = true;
  bossY += 2;
  if (bossY >= 800) {
    bossDying = false;
  }
}