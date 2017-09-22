function setup(){
    createCanvas(801,801);


    for (var x = 0; x <= width; x+=160) {
        line(x,0,x,height);
    }

    for (var y = 0; y <= height; y+=160) {
        line(0,y,width,y);
    }



}

function draw() {
}
