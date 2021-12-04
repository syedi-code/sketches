//Timescale
let dt = 0;
let dtMax = 8.9999;   //multiples of 12 work well - 36 results in one full cycle
let timescale_init  = 0.02;   //usually use 0.003
let timescale = timescale_init; 

//Flags
let flag_stop = false;

//Shape parameters
//I like: [10, 20], [0.1, 20], [10, 0.3], [10, 5]
let a = 10;   //Chaos
let n = 1;   //Supershape
let res_init = 5;
let resolution = res_init;

//Visual parameters
let stroke_init = 1;
let stroke_value = stroke_init;
let freeze_time = 360;
let cube_init = 75;
let cube_size = cube_init;

//Offsets
let color_offsets = []

function setup() {
  createCanvas(600, 600, WEBGL);
  setAttributes('antialias', true);
  angleMode(DEGREES);

  for (let i = 0; i < 5; i++) {
    color_offsets.push(random(0, 500));
  }

  let bg = createVector(255, 253, 208);
}

function draw() {
  let file_name = 'frame' + frameCount;
  strokeWeight(stroke_value);
  background(255, 253, 208);
  rotateY(dt * 10);

  draw_spheres();

  handle_animation();
  console.log(dt);
}

function cube(size) {
  let r = map(cos(dt * 10), -1, 1, 50, 200);
  let g = map(sin(dt * 10), -1, 1, 50, 200);
  stroke(r, g, 175);

  push();
  noFill();
  strokeWeight(stroke_value * 2);
  rotateY(dt * 25);
  box(size, size, size);
  pop();
}

function handle_animation() {
  if (dt > dtMax) {
    flag_stop = true;
  }

  if (flag_stop == false) {
    dt += timescale;
  } else {
    noLoop();
  }
}

function draw_spheres() {
  let s1 = new SineCircle(dt, 200, a, n, resolution, color_offsets[0]);
  let s2 = new SineCircle(dt, 200, a, n, resolution, color_offsets[1]);
  let s3 = new SineCircle(dt, 200, a, n, resolution, color_offsets[2]);
  let s4 = new SineCircle(dt, 200, a, n, resolution, color_offsets[3]);
  
  push();
  s1.draw();
  pop();

  push();
  rotateY(45);
  s2.draw();
  pop();

  push();
  rotateY(-45);
  s3.draw();
  pop();

  push();
  rotateY(90);
  s4.draw();
  pop();
}