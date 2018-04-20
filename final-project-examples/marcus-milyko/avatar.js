var charX = 475;
var charY = centY - 75;
var charWidth = 50;
var charHeight = 75;
var moving = false;
var charLeft = false;

function drawChar() {
  // Chooses the character sprite to display
  if (grounded) {
    if (moving) {
      if (charLeft) {
        image(avatarMovingLeft, charX, charY);
      } else {
        image(avatarMovingRight, charX, charY);
      }
    } else {
      if (charLeft) {
        image(avatarStandStillLeft, charX, charY);
      } else {
        image(avatarStandStillRight, charX, charY);
      }
    }
  } else {
    if (charLeft) {
      image(avatarJumpingLeft, charX, charY);
    } else {
      image(avatarJumpingRight, charX, charY);
    }
  }
}

function charMove() {
  // Moves the character to the Left and Right accordingly
  // The character cannot go past the edge of the screen.
  if (keyIsDown(LEFT_ARROW)) {
    moving = true;
    charLeft = true;
    charX -= 4;
  } else if (keyIsDown(RIGHT_ARROW)) {
    moving = true;
    charLeft = false;
    charX += 4;
  } else {
    moving = false;
  }
}

function locationCheck() {
  // Supposed to loop a Character heading off the left side of the screen to the other side
  if (charX + charWidth <= 0) {
    charX = width - 1;
  }
  // Supposed to loop a Character heading off the right side of the screen to the other side
  if (charX >= width) {
    charX = 1 - charWidth;
  }
  if (charY >= height) {
    charY = -charHeight + 5;
  }
}

function gravity() {
  // Check Bottom
  if (charY + charHeight == botY && charX >= botX - charWidth * 7 / 10 && charX <= botX + botLength - 15) {
    grounded = true;
    if (bossBottom && attacking) {
      failure = true;
    }
    // Check Middle Left
  } else if (charY + charHeight == midPlatsY && charX <= midLeftX + midLength - 15) {
    grounded = true;
    if (bossMidPair && attacking) {
      failure = true;
    }
    // Check Middle Right
  } else if (charY + charHeight == midPlatsY && charX >= midRightX - charWidth * 7 / 10) {
    grounded = true;
    if (bossMidPair && attacking) {
      failure = true;
    }
    // Check Middle
  } else if (charY + charHeight == centY && charX >= centX - charWidth * 7 / 10 && charX <= centX + centLength - 15) {
    grounded = true;
    if (bossMid && attacking) {
      failure = true;
    }
    // Check Top Left
  } else if (charY + charHeight == topPlatsY && charX <= topLength - 15) {
    grounded = true;
    if (bossTopPair && attacking) {
      failure = true;
    }
    // Check Top Right
  } else if (charY + charHeight == topPlatsY && charX >= topRightX - charWidth * 7 / 10) {
    grounded = true;
    if (bossTopPair && attacking) {
      failure = true;
    }
    // Check Top
  } else if (charY + charHeight == centY2 && charX >= centX - charWidth * 7 /10 && charX <= centX + centLength - 15) {
    grounded = true;
    if (bossTop && attacking) {
      failure = true;
    }
    // Gravity
  } else {
    charY += 5;
    grounded = false;
  }
}