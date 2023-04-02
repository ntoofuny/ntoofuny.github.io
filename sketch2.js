var time, theta = 0;
var frames = 300,
    num = 50,
    num2 = 1;
//var rs;
let dim;
let rad = 200;
let angle = 0;

let i= 0;
let deg = 0;
let minWindowSize = Math.min(window.innerWidth, window.innerHeight);
const width = minWindowSize;
const height = minWindowSize;
let newWidth = width/2;
let newHeight = height/2;
let counter = 0;

// Colors
a = 30;
b = 0;
c = 0;


function setup() {
  createCanvas(600,500);
  canvas.parent('sketch2');
  dim = width / 1 +1000;
  background("white");
  colorMode(HSB, 360, 100, 100);
  noStroke();
  ellipseMode(RADIUS);
  frameRate(150);
    rs = random(10000); 
}


function preload(){
  //loading all three images
cat = loadImage ('images/catDONE.png');
}


function draw() {
  
  background("black");
  //for (let x = 0; x <= width; x += dim) {
    //drawGradient(x, height / 2);
     
  //}
  star(mouseX, mouseY, 5, 10, 5);
   randomSeed(rs);
    time = (frameCount % frames) / float(frames);
    
    theta += TWO_PI / frames;

  noStroke();
  fill(255,0,0)
  
  for(let i = 15; i< 5000; i+=15)
  {
    push()
    translate(width/2,height/2)
    rotate(i+ angle * 2)
    noFill()
    stroke(20 , i * 100, i -100)
    ellipse(0, 0, 15 , i )
    
    pop()
    
    angle += 0.04
  }
    //eagle image moving. Only the x axis is able to move freely
    image(cat,240,150,200,250);
  for (var i = 0; i < num; i++) {
        drawBubble(i);
    }
}




function drawGradient(x, y) {
  let radius = dim / 2;
  let h = random(0, 360);
  for (let r = radius; r > 0; --r) {
    fill(h, 90, 90);
    ellipse(x+250, y, r, r);
    h = (h + 1) % 360;
  }
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function drawBubble(i) {
    var x = random(width);
    var y = random(height);
    var sc = random(1, 3);
    //var rotation = random(-.01, 0.1);
    var m = map(sin( theta+(TWO_PI / num) * i), -1, 1, 0.5, 1.5);
    var sz = random(20, 50) * m;
    push();
    scale(sc);
    translate(x, y);
    fill('rgba(248,202,0,0.8)');
  text("connecting",200,)
star(0, -time * height, 5, 10, 5);
    pop();
}