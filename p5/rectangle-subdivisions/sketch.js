let t = 0;
let tEnd = 7200;
let tWait = 720;
let tWaitEnd = tWait + 60;
let timescale = 1;

let sinelines_one = [];
let sinelines_two = [];
let sinelines_three = [];

let alpha = 255;

let w = 300;
let h = 150;
let weight = 1;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  let bigness = map(t, 0, tWait, 0.3, 0.03); //0.5 - 0.125
  let frame = 'frame' + frameCount;
  translate(width/2, height/2);
  //background(137, 207, 240, alpha);
  background(0, 0, 0, 50);
  let pos = createVector(0, 0);
  scale(bigness);
  stroke(0);
  strokeWeight(weight);

  push();
  rotate(-45);
  draw_first_sinelines();
  pop();

  push();
  rotate(45);
  draw_second_sinelines();
  pop();

  //saveCanvas(frame, 'png');
  update();
}

function update() {
  if (t < 45) {
    strokeWeight(map(t, 0, 45, 0, 1));
  }

  if (t < tEnd) { //forward
    t += timescale;
  } else { //waiting
    tWait += timescale;
  }

  if (tWait > tWaitEnd) { //endwait
    t = 0;
    tWait = tEnd;
  }

  if (t > 10) {
    alpha = 50;
  }

  if (t % (timescale * 2) == 0 && t < 180) {
    //square
    sinelines_one.push(new SineLine(h, w, t, LEFT, 'one', 2));
    sinelines_one.push(new SineLine(h, w, t, RIGHT, 'one', 2));
    sinelines_two.push(new SineLine(h, w, t, LEFT, 'two', 2));
    sinelines_two.push(new SineLine(h, w, t, RIGHT, 'two', 2));

    //base
    sinelines_one.push(new SineLine(h, w, t, LEFT, 'one', 3));
    sinelines_one.push(new SineLine(h, w, t, RIGHT, 'one', 3));
    sinelines_two.push(new SineLine(h, w, t, LEFT, 'two', 3));
    sinelines_two.push(new SineLine(h, w, t, RIGHT, 'two', 3));
  }

  if (t > tWait) {
    t = 0;
    sinelines_one = [];
    sinelines_two = [];
    sinelines_three = [];
  }

  //FADE STROKE WEIGHT
  if (t > tWait - 60) {
    weight = map(t, tWait - 60, tWait - 20, 1, 0);
  }
}

function draw_first_sinelines() {
  push();
  translate(-w/2, h);
  for (let sineLine of sinelines_one) {
    sineLine.draw();
  }
  pop();

  push();
  translate(-w/2, -h);
  rotate(90);
  for (let sineLine of sinelines_one) {
    sineLine.draw();
  }
  pop();

  push();
  translate(w/2, -h);
  rotate(180);
  for (let sineLine of sinelines_one) {
    sineLine.draw();
  }
  pop();

  push();
  translate(w/2, h);
  rotate(270);
  for (let sineLine of sinelines_one) {
    sineLine.draw();
  }
  pop();
}

function draw_second_sinelines() {
  push();
  translate(-w/2, h);
  for (let sineLine of sinelines_two) {
    sineLine.draw();
  }
  pop();

  push();
  translate(-w/2, -h);
  rotate(90);
  for (let sineLine of sinelines_two) {
    sineLine.draw();
  }
  pop();

  push();
  translate(w/2, -h);
  rotate(180);
  for (let sineLine of sinelines_two) {
    sineLine.draw();
  }
  pop();

  push();
  translate(w/2, h);
  rotate(270);
  for (let sineLine of sinelines_two) {
    sineLine.draw();
  }
  pop();
}

function draw_third_sinelines() {
  push();
  translate(-w/2, h);
  for (let sineLine of sinelines_three) {
    sineLine.draw();
  }
  pop();

  push();
  translate(-w/2, -h);
  rotate(90);
  for (let sineLine of sinelines_three) {
    sineLine.draw();
  }
  pop();

  push();
  translate(w/2, -h);
  rotate(180);
  for (let sineLine of sinelines_three) {
    sineLine.draw();
  }
  pop();

  push();
  translate(w/2, h);
  rotate(270);
  for (let sineLine of sinelines_three) {
    sineLine.draw();
  }
  pop();
}