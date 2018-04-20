var pathYPositions = [0, 0, 210, 210, 495, 495];
// Pathed Enemy Class

// Constructor Method
function PathedEnemy() {
  // The Enemy will be a 25x35 rectangular enemy
  this.pathWidth = 25;
  this.pathHeight = 35;
  this.pathPosX = width / 2;
  this.pathPosY = random(pathYPositions);
  this.pathMoveX = 3;
  // Variables for the starting direction
  this.goRight = floor(random(2));
  this.damage = false;
}
// Draws the Enemies
PathedEnemy.prototype.drawPathedEnemies = function() {
  push();
  // The shape grabbed with be a sprite, rather than a shape -- this is for filler
  if (this.goRight) {
    image(pathedEnemyRight, this.pathPosX, this.pathPosY);
  } else {
    image(pathedEnemyLeft, this.pathPosX, this.pathPosY);
  }
  pop();
};
// Moves the Enemies in the horizontal direction
PathedEnemy.prototype.movePathedEnemies = function() {
  if (this.goRight) {
    this.pathPosX += this.pathMoveX;
  } else {
    this.pathPosX -= this.pathMoveX;
  }
  this.playerCheck();
};
// Checks platforms for Pathed Enemies
PathedEnemy.prototype.platformCheck = function() {
  // Check Bottom
  if (this.pathPosY + this.pathHeight == botY && this.pathPosX >= botX - this.pathWidth && this.pathPosX <= botX + botLength) {
    this.damage = true;
    // Check Bottom Left
  } else if (this.pathPosY + this.pathHeight == midPlatsY && this.pathPosX <= midLeftX + midLength) {
    this.damage = true;
    // Check Bottom Right
  } else if (this.pathPosY + this.pathHeight == midPlatsY && this.pathPosX >= midRightX - this.pathWidth) {
    this.damage = true;
    // Check Middle
  } else if (this.pathPosY + this.pathHeight == centY && this.pathPosX >= centX - this.pathWidth && this.pathPosX <= centX + centLength) {
    this.damage = true;
    // Check Top Left
  } else if (this.pathPosY + this.pathHeight == topPlatsY && this.pathPosX <= topLength) {
    this.damage = true;
    // Check Top Right
  } else if (this.pathPosY + this.pathHeight == topPlatsY && this.pathPosX >= topRightX - this.pathWidth) {
    this.damage = true;
    // Check Top
  } else if (this.pathPosY + this.pathHeight == centY2 && this.pathPosX >= centX - this.pathWidth && this.pathPosX <= centX + centLength) {
    // Gravity
  } else {
    this.pathPosY += 5;
  }
};

PathedEnemy.prototype.pathedLocationCheck = function() {
  // Loops the enemy heading off the left side of the screen to the other side
  if (this.pathPosX + this.pathWidth <= 0) {
    this.pathPosX = width - 1;
  }
  // Loops the enemy heading off the right side of the screen to the other side
  if (this.pathPosX >= width) {
    this.pathPosX = 1 - this.pathWidth;
  }
  if (this.pathPosY >= height) {
    this.pathPosY = -this.pathHeight + 5;
    this.pathPosX += width / 2;
    if (this.pathPosX >= width) {
      this.pathPosX -= width;
    }
  }
};

PathedEnemy.prototype.playerCheck = function() {
  // Checks if Player can be killed
  if (this.damage) {
    if (this.pathPosX + this.pathWidth >= charX && this.pathPosX <= charX + charWidth && this.pathPosY <= charY + charHeight && this.pathPosY + this.pathHeight >= charY) {
      failure = true;
    }
  }
}