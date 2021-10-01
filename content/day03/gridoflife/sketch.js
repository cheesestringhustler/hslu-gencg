
const rectW = 6;
const nGrid = 10;
const nW = 24; //100*365*24*60
const nH = 100;
let age = 24;


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  // faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
  // console.log(faceapi.nets)
  // let inp = createInput('');
  // inp.position(0, 0);
  // inp.size(100);
  // inp.input(inputAge);
  loadPixels();
  console.log(pixels.length);
  frameRate(60);
}

function draw() {
  let d = new Date();
  let pink = color(255, 102, 204);

  background(0);
  loadPixels();
  for (let i = 0; i < pixels.length; i++) {
    // for (let i = 0; i < width; i++) {
    //   for (let j = 0; j < height; j++) {
    //     var index = j + width*i;
    if (i / (pixels.length / (24 * 60 * 60)) < d.getHours() * 60 * 60 + d.getMinutes() * 60 + d.getSeconds()) {
      // set(i, j, color(200));
      pixels[i] = red(pink);
      pixels[i + 1] = green(pink);
      pixels[i + 2] = blue(pink);
      pixels[i + 3] = alpha(pink);
    }
    // }

    // if (i/(pixels.length/(24*60*60)) < d.getHours()*60*60 + d.getMinutes()*60 + d.getSeconds()) {
    //   pixels[i] = red(pink);
    //   pixels[i+1] = green(pink);
    //   pixels[i+2] = blue(pink);
    //   pixels[i+3] = alpha(pink);
    // }
  }
  updatePixels();
  // push();
  // translate(10, 100);
  // for (var i = 0; i < nH; i++) {
  //   for (var j = 0; j < nW; j++) {
  //     var index = nW * i + j;
  //     if (index < age) {
  //       stroke(0);

  //     } else {
  //       stroke(255);
  //     }
  //     point(j*rectW, i*rectW);
  //     strokeWeight(2);
  //   }
  // }
  // pop();
}


function inputAge() {
  const v = parseInt(this.value());
  if (v > 0) {
    age = v;
  }
}