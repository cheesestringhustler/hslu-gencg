function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  
  frameRate(30);
  
  button = createButton('Motion Permission');
  button.position(0, 0);
  button.mousePressed(requestPermission);

  button = createButton('Reset');
  button.position(window.innerWidth-80, 0);
  button.mousePressed(reset);
}

let circleSize = 30;
let cx = window.innerWidth / 2;
let cy = window.innerHeight / 2;

function draw() {
  background(255, 1);

  fill(0);
  stroke(255);
  circle(cx, cy, circleSize);
}

function requestPermission() {
  DeviceMotionEvent.requestPermission()
  .then(response => {
    if (response == 'granted') {
      window.addEventListener("devicemotion", handleMotionEvent, true);
    }
  })
  .catch(console.error)
}

// needs https and permission checks
// setup: ngrok http 5500 localhost and button to ask for permission
function handleMotionEvent(event) {

  var x = event.accelerationIncludingGravity.x;
  var y = event.accelerationIncludingGravity.y;
  var z = event.accelerationIncludingGravity.z;

  cx += x;
  cy += -1 * y;

  cx = clamp(cx, circleSize/2, window.innerWidth-circleSize/2);
  cy = clamp(cy, circleSize/2, window.innerHeight-circleSize/2);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function reset() {
  clear();
  cx = window.innerWidth / 2;
  cy = window.innerHeight / 2;
}