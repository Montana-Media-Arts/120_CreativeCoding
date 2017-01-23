// Getting Started with p5.js
// Lauren McCarthy, Casey Reas, Ben Fry

var film;

function preload() { 
  film = loadJSON("film.json");
}

function setup() {
  noCanvas();
  var title = film.title;
  var dir = film.director;
  var year = film.year;
  var rating = film.rating;
  createP(title + " by " + dir + ", " + year + ". Rating: " + rating);
}