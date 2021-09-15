//Comets and comet trails!

let num_squares = 150;
let c = 0;
let min_square_size = 20;
let max_square_size = 50;
let edge_thickness = 1;
let bool_array = [0, 1, 2, 3];
let comets = [];

function setup() {
  //num_squares = round(random(6, 12));

  createCanvas(800, 800);
  background('#740211');
  rectMode(CENTER);
  stroke(255);
  fill(255, 0);
  strokeWeight(edge_thickness);

  //draw center shape
  push();
  strokeWeight(0);
  stroke(255);
  fill(0);
  circle(width/2, height/2, 25);
  pop();

  console.log(num_squares);
}

function draw() {
  let square_size = random(min_square_size, max_square_size);
  let rand_bool = random(bool_array);
  let bound_x = abs(random(square_size/2, (width/2) - square_size/2));
  let bound_y = abs(random(square_size/2, (height/2) - square_size/2));

  if (rand_bool == 0) {
    bound_x *= -1;
  } else if (rand_bool == 1) {
    bound_x *= -1;
    bound_y *= -1;
  } else if (rand_bool == 2) {
    bound_y *= -1;
  }

  translate(width/2, height/2);

  let cometPos = createVector(bound_x, bound_y);
  let comet = new Comet(cometPos, square_size, c);
  comets.push(comet);

  if (c < num_squares) {
    console.log('x: ' + bound_x + ' y: ' + bound_y);
    comet.show();
  }
  
  c++;
}

// function mousePressed() {
//   let square_size = random(min_square_size, max_square_size);
//   let cometPos = createVector(mouseX, mouseY);
//   let comet = new Comet(cometPos, square_size, c);
//   comets.push(comet);

//   if (c < num_squares) {
//     //console.log('x: ' + bound_x + ' y: ' + bound_y);
//     comet.show();
//   }
  
//   c++;
// }

function is_intersecting(x, y, size, other_x, other_y, other_size) {
  //https://www.geeksforgeeks.org/find-two-rectangles-overlap/
  let l1 = createVector(x - size/2, x + size/2);
  let r1 = createVector(x + size/2, y - size/2);
  let l2 = createVector(other_x - other_size/2, other_y + other_size/2);
  let r2 = createVector(other_x + other_size/2, other_y - other_size/2);

  if (l1.x == r1.x || l1.y == r1.y || l2.x == r2.x || l2.y == r2.y) {
    return false;
  }

  if (l1.x >= r2.x || l2.x >= r1.x) {
    return false;
  }

  if (l1.y <= r2.y || l2.y <= r1.y) {
    return false;
  }

  return true;
}

  //Failed code for trying to stop object intersection:
  
  // if (c != 0 && c < num_squares) {
  //   OUTER_LOOP: while (intersection == true) {
  //     console.log(c);

  //     //Randomly generating x and y coordinates
  //     bound_x = round(random(square_size, (width/2) - square_size));
  //     bound_y = round(random(square_size, (height/2) - square_size));
    
  //     // if (rand_bool == 0) {
  //     //   bound_x *= -1;
  //     //   bound_y *= 1;
  //     // } else if (rand_bool == 1) {
  //     //   bound_x *= -1;
  //     //   bound_y *= -1;
  //     // } else if (rand_bool == 2) {
  //     //   bound_x *= 1;
  //     //   bound_y *= -1;
  //     // }

  //     //Checking each comet for intersection
  //     INNER_LOOP: for (let comet of comets) {
  //       intersection = is_intersecting(bound_x, bound_y, square_size, comet.pos_x, comet.pos_y, comet.size);

  //       //console.log("Inner loop intersecting?: " + intersection);
  //       if (intersection == true) {
  //         continue OUTER_LOOP;
  //       }
  //     }

  //     //console.log("Intersecting?: " + intersection);

  //     if (intersection == false) {
  //       break;
  //     } else {
  //       continue;
  //     }
  //   }
  // }
