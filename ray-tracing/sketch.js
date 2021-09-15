//2D ray casting!

let walls = [];
let ray;
let particle;

function setup() {
  createCanvas(800, 800);

  for (let i = 0; i < 5; i++) {
    x1 = random(width);
    x2 = random(width);
    y1 = random(height);
    y2 = random(height);
    walls[i] = new Boundary(x1, y1, x2, y2);
  }

  //Walls on the edges of the canvas
  walls.push(new Boundary(0, 0, width, 0));
  walls.push(new Boundary(width, 0, width, height));
  walls.push(new Boundary(width, height, 0, height));
  walls.push(new Boundary(0, height, 0, 0));

  particle = new Particle();
}

function draw() {
  background(0);

  for (let wall of walls) {
    wall.show();
  }

  particle.update(mouseX, mouseY);
  particle.show();
  particle.look(walls);
  //ray.show();
  //ray.lookAt(mouseX, mouseY);

  //Looking for intersection between ray and the wall it's looking at
  // let point = ray.cast(wall);
  // console.log(point);

  // if (point) { //if a point of intersection exists
  //   fill(255);
  //   ellipse(point.x, point.y, 8, 8);
  // }
}
