let centerX = 0;
let centerY = 0;
let formResolution = 5;
let x = [];
let y = [];
let stepSize = 1;
let initRadius = 100;
let circleQueue = [];
let maxQueueSize = 50;
let circleSpace = 10;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  frameRate(30);

  centerX = window.innerWidth / 2 + initRadius;
  centerY = window.innerHeight / 2 + initRadius;

  var angle = radians(360 / formResolution);
  for (var i = 0; i < formResolution; i++) {
    x.push(cos(angle * i) * initRadius);
    y.push(sin(angle * i) * initRadius);
  }
  
}

function draw() {
  // centerX += (mouseX - centerX) * 0.01;
  // centerY += (mouseY - centerY) * 0.01;
  background(255)

  for (var i = 0; i < formResolution; i++) {
    x[i] += random(-stepSize, stepSize);
    y[i] += random(-stepSize, stepSize);
  }

  let tmpArr = [];

  // tmpArr.push({x: x[formResolution - 1] + centerX, y: y[formResolution - i] + centerY});
  for (var i = 0; i < formResolution; i++) {
    tmpArr.push({x: x[i] + centerX, y:  y[i] + centerY});
  }
  // tmpArr.push({x: x[0] + centerX, y: y[0] + centerY});
  // tmpArr.push({x: x[1] + centerX, y: y[1] + centerY});

  if (circleQueue.length > maxQueueSize) {
    circleQueue.pop();
    circleQueue.unshift(tmpArr);
  } else {
    circleQueue.push(tmpArr);
  }

  fill(0, 0)
  beginShape();
  for (var i = 0; i < circleQueue.length; i++) {
    stroke(0, 0, 0, map(i, 0, circleQueue.length, 0, 255))
    for (var j = 0; j < circleQueue[i].length; j++) {
      curveVertex(circleQueue[i][j].x - i * circleSpace, circleQueue[i][j].y - i * circleSpace)
    }
  }
  // curveVertex(x[formResolution - 1] + centerX, y[formResolution - i] + centerY);

  // for (var i = 0; i < formResolution; i++) {
  //   curveVertex(x[i] + centerX, y[i] + centerY);
  // }
  // curveVertex(x[0] + centerX, y[0] + centerY);

  // curveVertex(x[1] + centerX, y[1] + centerY);

  endShape();
}
