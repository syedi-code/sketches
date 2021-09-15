//Rotating squares!

let rect_h = 200; //200
let rect_w = 200; //200
let rect_r = 45;
let tri_h = 125;
let tri_r = 0;
let circle_d = 50;
let circle_c = 0;
let c = 0; //0
let num_triangles_in_row = 7;
let num_circles_in_col = 9;
let triangles_drawn = false; //false
let color = 255;

function setup() {
  createCanvas(800, 800);
  frameRate(15);
  background(0);
}

function draw() {
  angleMode(DEGREES);

  //Draw squares in center
  if (rect_h > 5 && rect_w > 5) {
    translate(width/2, height/2);
    rectMode(CENTER);
    fill(0, 0, 0, 0);
    //color = (2 * c / 100) * 255;
    stroke(color);
    rotate(rect_r);
    rect(0, 0, rect_h, rect_w);

    //different patterns can be achieved by modulating h, w, and r
    rect_h -= 5;
    rect_w -= 5;
    rect_r += 1;
    rotate(rect_r);
    rect(0, 0, rect_h, rect_w);
  } 
  
  //Draw top row triangles
  else if (tri_h > 2 && c < num_triangles_in_row) {    
    draw_triangles(c * (width/8), 0);
  } 
  
  //Draw bottom row triangles
  else if (tri_h > 2 && c < (2 * num_triangles_in_row)) {
    draw_triangles((c - num_triangles_in_row) * width/8, (3 * height)/4);
  } 

  //Draw left side circles
  else if (triangles_drawn == true && circle_d > 4 && circle_c < num_circles_in_col + 1) {
    draw_circles(0, (circle_c + 1) * (height/16));
  }

  //Draw right side circles
  else if (triangles_drawn == true && circle_d > 4 && circle_c < (2 * num_circles_in_col) + 1) {
    draw_circles(3*width/4, ((circle_c - num_circles_in_col + 1)) * (height/16));
  }
  
  //Iterate counter, reset variables (triangle height/circle diameter), and adjust triangle rotation
  else {
    c++;
    tri_h = 125;
    circle_d = 50;

    if (c % 2 == 0) {
      tri_r = 0;
    } else {
      tri_r = 180;
    }

    if (c > (2 * num_triangles_in_row)) {
      triangles_drawn = true;
      circle_c++;
    }
  }
}

function draw_triangles(xoffset, yoffset) {
  translate(width/8 + xoffset, height/8 + yoffset);
  triangle1 = new Triangle(0, 0, tri_h, tri_r);
    
  triangle1.show();

  tri_h -= 5;
  tri_r += 1;
}

function draw_circles(xoffset, yoffset) {
  translate(width/8 + xoffset, height/8 + yoffset);
  fill(0, 0, 0, 0);
  stroke(color);
  strokeWeight(1);
  circle(0, 0, circle_d);
  circle_d -= 6;
}