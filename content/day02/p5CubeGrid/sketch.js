var rot = 0;
const cubeSize = 50;
const n = 10
const nCol = window.innerWidth / n;
// const n = window.innerWidth;
var off = 0;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);

  angleMode(DEGREES);
  perspective(75);
  // ortho(-window.innerWidth / 2, window.innerWidth / 2, window.innerHeight / 2, -window.innerHeight / 2, 0, 1000);
  stroke(255);
}

function draw() {
  background(0);

  let x = 0, y = 0;
  for (var i = -window.innerWidth / 2; i < window.innerWidth / 2; i += nCol) {
    for (var j = -window.innerHeight / 2; j < window.innerHeight / 2; j += nCol) {

      push();
      translate(j+cubeSize, i+cubeSize);
      rotateY(rot + (n * y + x) * (360 / (nCol * nCol)))
      rotateX(rot + (n * y + x) * (360 / (nCol * nCol)))
      
      // fill(map(sin(rot + x), -1, 1, 0, 255), map(sin(rot + x), -1, 1, 0, 255), map(sin(rot + y), -1, 1, 0, 255));
      fill(map(sin(rot + x + y), -1, 1, 0, 255), 15, 45);

      box(cubeSize);
      
      pop();
      y++;
    }
    x++;
  }

  rot += 1//(360 / (nCol * nCol));
  if (rot >= 360) {
    rot = 0;
  }
}
