let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
const sphereSize = 200;
const cubeSize = 20;
const n = 20;
const nCol = windowWidth / n;
let xoff = 0.0;
let offStep = 0.005;
let hMultiplier = 80;
let sunPos = -sphereSize;
let isSun = true;
let sunHeightMax = windowHeight/2+sphereSize+100;

let cBrgDayLight;
let cBrgDayDark;
let cSunDayLight;
let cSunDayDark;
let cBrgNightLight;
let cBrgNightDark;
let cSunNightLight;
let cSunNightDark;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  angleMode(DEGREES);
  frameRate(24);
  createEasyCam();
  // perspective(55, width / height, 0.1, 10000);
  document.oncontextmenu = function () {
    return false;
  }

  document.onmousedown = function () {
    return false;
  }

  colorMode(RGB)
  cBrgDayLight = color(60, 9, 108);
  cBrgDayDark = color(36, 0, 70);
  cSunDayLight = color(255, 158, 0);
  cSunDayDark = color(255, 109, 0);

  cBrgNightLight = color(42, 6, 75);
  cBrgNightDark = color(21, 0, 41);
  cSunNightLight = color(255, 109, 0);
  cSunNightDark = color(247, 37, 133);

  // Check if the day is past midday 12:00, if so then it's day
  if (getSeconds() > 86400/2) {
    isSun = true;
  }
}


function draw() {
  if (isSun) {
    background(lerpColor(cBrgDayDark, cBrgDayLight, mapSunPos()));
  } else {
    background(lerpColor(cBrgNightDark, cBrgNightLight, mapSunPos()));
  }
  xoff = xoff + offStep;
  
  let x = 0, y = 0;
  for (var i = -windowWidth/2; i < windowWidth/2; i += cubeSize) {
    for (var j = -400; j < 400; j += cubeSize) {
      let n = noise(i*0.01, j*0.01, xoff) * hMultiplier;
      
      push();
      rotateX(76.5);
      translate(i+cubeSize, j+cubeSize, n-20);

      stroke(255, 0, 110);
      fill(1, 22, 39, 255);
      box(cubeSize);
      
      pop();
      x++;
    }
    y++;
  }

  push();
  rotateX(77);
  noStroke();
  translate(0, -windowHeight-sphereSize, sunPos);
  if (isSun) {
    // fill(lerpColor(cSunDayDark, cSunDayLight, mapSunPos()));
    emissiveMaterial(lerpColor(cSunDayDark, cSunDayLight, mapSunPos()));
  } else {
    emissiveMaterial(lerpColor(cSunNightDark, cSunNightLight, mapSunPos()));
  }
  sphere(sphereSize);
  pop();

  // simple progress of sun:
  // sunPos+= 10;
  // time progression of sun:
  sunPos = map(getSeconds(), 0, isSun ? 86400 : 86400/2, -sphereSize, sunHeightMax);

  // respawn sun underneath grid
  if (sunPos >= sunHeightMax) {
    sunPos = -sphereSize;
    isSun = !isSun;
  }
}

function mapSunPos() {
  // let newV = map(sunPos, -sphereSize, sphereSize, v - range, v + range, range);
  return map(sunPos, -sphereSize/2, sphereSize, 0, 1);
}

function getSeconds() {
  var dt = new Date();
  return dt.getSeconds() + (60 * (dt.getMinutes() + (60 * dt.getHours())));
}