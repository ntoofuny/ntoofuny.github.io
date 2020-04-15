var speed = 1;

var sqr = {
    x: 0,
    dx: 1
};

function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent('sketch');
    background(0, 0, 0);
    fill(255, 255, 0);
    arc(200, 200, 100, 100, 0, -HALF_PI / 2);
    fill(100);
    circle(190, 180, 10, 10);
    fill(255, 0, 0);
}

function draw() {
    background(0, 0, 0);
    fill(255, 255, 0);
    arc(200, 200, 100, 100, 0, -HALF_PI / 2);
    fill(100);
    circle(190, 180, 10, 10);
    fill(255, 0, 0);
    square(sqr.x, 200, 20);
    sqr.x = sqr.x + sqr.dx;

    if (sqr.x > width || sqr.x < 0) {
        sqr.dx = -sqr.dx;
    }

    if (sqr.y > height || sqr.y < 0) {
        sqr.dy = -sqr.dy;
    }
}

function mousePressed() {
    createCanvas(400, 400);
    background(0, 0, 0);
    fill(0, 255, 0);
    arc(200, 200, 100, 100, 0, -HALF_PI / 2);
    fill(100);
    circle(190, 180, 10, 10);
    fill(255, 0, 0);
    sq.x = 0;

}
