let t = 0;
let dt = 0;
let dtMax = 360;
let flagReverse = false;
let res = 20;

function setup() {
  createCanvas(600, 600, WEBGL);
  smooth();
  angleMode(DEGREES);
}

function draw() {
  translate(-width/2, 0);
  background(0);
  scale(0.9);

  for (var j = 1; j < 4; j++) {
    for (var i = 0; i < 200; i += res) {
      let box = new DropBox(i, res, noise(i) * height);
      translate(res, 0);
      box.draw();
    }
  }

  update();
}

function update() {
  t += 0.5;
  dt = map(sin(t), -1, 1, 0, 360);
}