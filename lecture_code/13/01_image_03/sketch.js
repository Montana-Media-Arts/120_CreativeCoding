let img = {};
img.pos = { x: 1, y: 1 };
img.delta = { x: 5, y: 5 };
img.size = 180;

function preload() {
    img.file = loadImage('./images/MART_LOGO_Black.png');
}

function setup() {
    createCanvas( windowWidth, 600 );
}


function draw() {
    background( 'pink' );

    image( img.file, img.pos.x, img.pos.y, img.size, img.size );

    img.pos.x += img.delta.x;
    img.pos.y += img.delta.y;

    if( img.pos.x <= 0 || img.pos.x + img.size > width ){
        img.delta.x *= -1;
    }

    if( img.pos.y <= 0 || img.pos.y + img.size > height ){
        img.delta.y *= -1;
    }
}
