
function setup() {
  createCanvas(600, 400);
  noLoop();
  noStroke();
  textSize(20);

  loadXML("data.xml", drawData);
}

function drawData(data) {

  console.log(data);

  var foods = data.getElementsByTagName("food");
  console.log(foods);
  for (var i=0; i<foods.length; i++) {
    var nameNode = foods[i].getElementsByTagName("name")[0];
    var name = nameNode.innerHTML;
    console.log(name);
    text(name, 50, 50+i*50);
  }

}
