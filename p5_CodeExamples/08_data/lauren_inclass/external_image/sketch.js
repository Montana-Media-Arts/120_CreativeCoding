var myImg;

function setup() {
  var c = createCanvas(600, 400);
  c.position(300, 0);
  myImg = createImg('http://www.foodsafetynews.com/files/2015/03/KRAFT_Macaroni-Cheese_Dinner.jpg');
  myImg.hide();
  //myImg = loadImage('http://www.foodsafetynews.com/files/2015/03/KRAFT_Macaroni-Cheese_Dinner.jpg')
}

function draw() {
  background(0);
  image(myImg, 10, 10, 200, 200);
  ellipse(width/2, height/2, 300, 300);
}