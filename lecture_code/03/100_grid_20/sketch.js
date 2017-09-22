function setup(){
    createCanvas(1001,801);


    for (var x = 0; x <= width; x+=50) {
        line(x,0,x,height);
    }

    for (var y = 0; y <= height; y+=50) {
        line(0,y,width,y);
    }



}

function draw() {
}
