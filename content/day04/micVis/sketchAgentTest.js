let centerX = 0;
let centerY = 0;
let formResolution = 5;
let x = [];
let y = [];
let stepSize = 5;
let initRadius = 100;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  frameRate(30);

  centerX = window.innerWidth / 2;
  centerY = window.innerHeight / 2;
  var angle = radians(360 / formResolution);
  for (var i = 0; i < formResolution; i++) {
    x.push(cos(angle * i) * initRadius);
    y.push(sin(angle * i) * initRadius);
  }
  
}



function draw() {
  centerX += (mouseX - centerX) * 0.01;
  centerY += (mouseY - centerY) * 0.01;
  background(255, 1)

  for (var i = 0; i < formResolution; i++) {
    x[i] += random(-stepSize, stepSize);
    y[i] += random(-stepSize, stepSize);
  }

  fill(0, 0)
  beginShape();
  curveVertex(x[formResolution - 1] + centerX, y[formResolution - i] + centerY);

  for (var i = 0; i < formResolution; i++) {
    curveVertex(x[i] + centerX, y[i] + centerY);
  }
  curveVertex(x[0] + centerX, y[0] + centerY);

  curveVertex(x[1] + centerX, y[1] + centerY);

  endShape();
}
