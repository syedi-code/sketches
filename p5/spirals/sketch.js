//Spirals!

let c = 0;
let x = 0;
let y = 0;
let dt = 0; 
let v = 10;
let w = 1;
let g = 255;
let b = 150;

function setup() {
  createCanvas(800, 800);
  background('#BA137D'); //119, 119, b
  frameRate(30);
}

function draw() {
  //background('#BA137D');
  translate(width/2, height/2);
  angleMode(degrees);
  strokeWeight(5);
  stroke(0);
  let spiral = new Spiral(x, y, v, w, dt);
  //let spiral2 = new Spiral(-15, -15, v, w, dt);
  //let spiral3 = new Spiral(-30, -30, v, w, dt);
  //let spiral4 = new Spiral(15, 15, v, w, dt);
  //let spiral5 = new Spiral(30, 30, v, w, dt);
  let s = c % 2 == 0 ? 0.75*dt : 1.5*dt; //alternate square size by calling Spiral.draw_square(s, ...)
 
  if (c < 300) {
    iterate_square(spiral);
    spiral.draw_square(1.5*dt, 30, 30, b);
    //spiral.draw_square(x/5, 30, g - 30, b, 200);
    //spiral.draw_square(y/2, 50, 50, b, 200);
    //spiral2.draw_square(1.5*dt, 70, g - 70, b + 10);
    //spiral3.draw_square(1.5*dt, 110, g - 110, b + 20);
    //spiral4.draw_square(1.5*dt, 150, g - 150, b + 30);
    //spiral5.draw_square(1.5*dt, 190, g - 190, b + 40);
    spiral.draw_square(x, 100, 100, b);
    spiral.draw_square(y, 150, 150, b);
    spiral.draw_square(y - x, 200, 200, b);
    spiral.draw_square(c, 250, 250, b);
    spiral.draw_square(c + x, 75, 75, 200);
    spiral.draw_square(c - x, 50, 50, 200);
  } 

  c++;
}

function iterate_square(spiral) {
  x = spiral.get_pos_x();
  y = spiral.get_pos_y();
  dt += .1;
}