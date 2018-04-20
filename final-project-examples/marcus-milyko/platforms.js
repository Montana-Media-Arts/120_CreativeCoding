var platHeight = 48;
var midLeftX = 0;
var midRightX = 725;
var midPlatsY = 590;
var midLength = 275;
var centX = 250;
var centLength = 500;
var centY = 440;
var centY2 = 140;
var botX = 200;
var botLength = 600;
var botY = 770;
var topLeftX = 0;
var topLength = 200;
var topPlatsY = 290;
var topRightX = 800;
var platDefaultRed = 100;
var platDefaultGreen = 112;
var platDefaultBlue = 108;
var platAttackedGreen = 30;
var platAttackedBlue = 15;
// All Platforms need seperate colors to be able to change color seperately
var platBotRed = platDefaultRed;
var platBotGreen = platDefaultGreen;
var platBotBlue = platDefaultBlue;
var platCentRed = platDefaultRed;
var platCentGreen = platDefaultGreen;
var platCentBlue = platDefaultBlue;
var platMidPairRed = platDefaultRed;
var platMidPairGreen = platDefaultGreen;
var platMidPairBlue = platDefaultBlue;
var platTopPairRed = platDefaultRed;
var platTopPairGreen = platDefaultGreen;
var platTopPairBlue = platDefaultBlue;
var platTopRed = platDefaultRed;
var platTopGreen = platDefaultGreen;
var platTopBlue = platDefaultBlue;

function drawPlatforms() {
  // Draws the background
  rectMode(CORNER);
  image(backgroundBoss, 0, 0);
  // Checks the boss state, draws accordingly
  if (boss) {
    bossBounce();
    if (angry) {
      image(bossAngry, 0, bossY);
    } else {
      image(bossStill, 0, bossY);
    }
  }
  if (bossDying) {
    image(bossDead, 0, bossY);
    bossDeath();
  }
  // Draw the bottom platform
  fill(platBotRed, platBotGreen, platBotBlue);
  rect(botX, botY, botLength, platHeight);
  // Draw the middle platform
  fill(platCentRed, platCentGreen, platCentBlue);
  rect(centX, centY, centLength, platHeight);
  // Draw the bottom two side platforms
  fill(platMidPairRed, platMidPairGreen, platMidPairBlue);
  rect(midLeftX, midPlatsY, midLength, platHeight);
  rect(midRightX, midPlatsY, midLength, platHeight);
  // Draw the top two platforms
  fill(platTopPairRed, platTopPairGreen, platTopPairBlue);
  rect(topLeftX, topPlatsY, topLength, platHeight);
  rect(topRightX, topPlatsY, topLength, platHeight);
  // Draw the heighest of the platforms
  fill(platTopRed, platTopGreen, platTopBlue);
  rect(centX, centY2, centLength, platHeight);
}
// Resets all platforms to normal colors
function resetPlatformColors() {
  platBotRed = platDefaultRed;
  platBotGreen = platDefaultGreen;
  platBotBlue = platDefaultBlue;
  platCentRed = platDefaultRed;
  platCentGreen = platDefaultGreen;
  platCentBlue = platDefaultBlue;
  platMidPairRed = platDefaultRed;
  platMidPairGreen = platDefaultGreen;
  platMidPairBlue = platDefaultBlue;
  platTopPairRed = platDefaultRed;
  platTopPairGreen = platDefaultGreen;
  platTopPairBlue = platDefaultBlue;
  platTopRed = platDefaultRed;
  platTopGreen = platDefaultGreen;
  platTopBlue = platDefaultBlue;
}