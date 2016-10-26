function setup() {
  createCanvas(600, 600);
  loadTable("ortiz.csv", handleData);
}

function handleData(data) {
  background(255, 100, 100);
  var numRows = data.getRowCount();
  var yinterval = height/numRows;
  
  for (var i=0; i<numRows; i++) {
    var year = data.get(i, 0);
    var homeruns = data.getNum(i, 1);
    var h = map(homeruns, 0, 60, 0, width);
    
    rect(0, i*yinterval, h, 20);
    text(year, 10, i*yinterval+13);
  }
}