let centerX = 0;
let centerY = 0;
let formResolution = 5;
let x = [];
let y = [];
let stepSize = 5;
let initRadius = 300;
let circleQueue = [];
let maxQueueSize = 120;
let circleSpace = 20;
let mic;
let amp;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  frameRate(30);

  centerX = window.innerWidth / 2 + initRadius /2;
  centerY = window.innerHeight / 2 + initRadius/2;

  var angle = radians(360 / formResolution);
  for (var i = 0; i < formResolution; i++) {
    x.push(cos(angle * i) * initRadius);
    y.push(sin(angle * i) * initRadius);
  }
  
  // Create an Audio input
  mic = new p5.AudioIn();
  mic.start();
  
  // amp = new p5.Amplitude();
  // amp.setInput(mic);
  console.log(getAudioContext())
}

function draw() {
  let vol = mic.getLevel();
  console.log(vol);
  let circleV = map(vol, 0, 1, 2, 20);

  background(255);
  circle(100, 100, circleV)

  for (var i = 0; i < formResolution; i++) {
    x[i] += random(-stepSize, stepSize) * vol*20;
    y[i] += random(-stepSize, stepSize) * vol*20;
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
  } 
  circleQueue.unshift(tmpArr);

  fill(0, 0)
  beginShape();
  for (var i = 0; i < circleQueue.length; i++) {
    stroke(0, 0, 0, map(i, 0, circleQueue.length, 0, 255))
    for (var j = 0; j < circleQueue[i].length; j++) {
      curveVertex(circleQueue[i][j].x - i * circleSpace, circleQueue[i][j].y - i * circleSpace/2)
    }
  }
  endShape();
}

function mousePressed() {
  touchStarted();
}

function touchStarted() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
}