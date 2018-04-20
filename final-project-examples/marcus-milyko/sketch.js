var standStill = false;
var jump = false;
var grounded = true;
var startup = true;
var failure = false;
var collect = true;
var pathed = [];
var boss = false;
var ambientTheme;

function preload() {
  // Preloads all Sounds and Sprites
  ambientTheme = loadSound("sounds/revengeOfTheCyclops.mp3");
  collectableCollected = loadSound("sounds/dingSoundEffect.wav");
  collectableSprite = loadImage("sprites/collectable.png");
  pathedEnemyRight = loadImage("sprites/enemy.png");
  pathedEnemyLeft = loadImage("sprites/enemyLeft.png");
  backgroundBoss = loadImage("sprites/backgroundBoss.png");
  bossStill = loadImage("sprites/boss.png");
  bossAngry = loadImage("sprites/anger.png");
  bossDead = loadImage("sprites/ded.png");
  avatarStandStillRight = loadImage("sprites/avatarLazyRight.png");
  avatarStandStillLeft = loadImage("sprites/avatarLazyLeft.png");
  avatarMovingLeft = loadImage("sprites/avatarRunningLeft.png");
  avatarMovingRight = loadImage("sprites/avatarRunningRight.png");
  avatarJumpingLeft = loadImage("sprites/avatarFallingLeft.png");
  avatarJumpingRight = loadImage("sprites/avatarFallingRight.png");
}

function setup() {
  createCanvas(1000, 800);
  frameRate(60);
  generateCollectLocation();
}

function draw() {
  // Runs the startup page until begun for the first time.
  // After, it'll either be running the game, or showing the failure screen.
  if (startup) {
    startUpPage();
    beginButton();
  } else {
    if (failure) {
      endGamePage();
    } else {
      drawWorld();
      moveWorld();
      checkWorld();
      enemyTimer();
    }
  }
}

function mousePressed() {
  checkButtons();
}

function keyPressed() {
  // Makes the up key a jump -- starting the jump functions through changing booleans
  // and preventing more jumping until the next landing.
  if (keyCode === UP_ARROW && grounded === true) {
    jump = true;
    phase1 = true;
    grounded = false;
  }
}

function drawWorld() {
  // Draws everything in the order 'background, boss, platforms, collectables, avatar, mobs'
  drawPlatforms();
  drawCollect();
  drawChar();
  for (var i = 0; i < pathed.length; i++) {
    pathed[i].drawPathedEnemies();
  }
}

function moveWorld() {
  // Moves everything in the order 'Character, Enemies'
  charMove();
  for (var i = 0; i < pathed.length; i++) {
    pathed[i].movePathedEnemies();
  }
  // Afterwards, does part of the boss attack animations
  if (prepareAttack) {
    bossAttack();
  }
}

function checkWorld() {
  // Checks for the bosses existance, than runs it's timer
  if (boss) {
    bossAttackTimer();
    if (attacking) {
      bossAttackingTimer();
    }
  }
  // Checks the avatar location to either land on a platform/ continue falling
  locationCheck();
  // Check if the avatar can collect a collectable
  checkCollect();
  // Checks gravity for the pathed Enemies
  // Then, checks if the Mobs are killing the Avatar
  for (var i = 0; i < pathed.length; i++) {
    pathed[i].platformCheck();
    pathed[i].pathedLocationCheck();
  }
  // Runs all the jump mechanics.
  if (jump) {
    charJump();
    charJumpTimer();
  } else {
    gravity();
  }
}