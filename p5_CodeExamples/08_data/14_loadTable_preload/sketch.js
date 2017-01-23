// Getting Started with p5.js
// Lauren McCarthy, Casey Reas, Ben Fry

var stats;

function preload() {
  stats = loadTable("ortiz.csv");
}

function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < stats.getRowCount(); i++) {
    // Gets the value from row i, column 0 in the file
    var year = stats.get(i, 0);
    // Gets the value from row i, column 1
    var homeRuns = stats.get(i, 1);   
    var rbi = stats.get(i, 2);
    var average = stats.get(i, 3); 
    print(year, homeRuns, rbi, average);
    text(year+', '+homeRuns+', '+rbi+', '+average, 50, 50+50*i);
  }
}