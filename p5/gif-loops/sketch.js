let frame_count = 0;
let dt = 0;
let passed_origin = 0;
let at_origin = false;
let max_asteroid_size = 60;
let orbit_size = 45;
let num_asteroids = 30;
let asteroid_trails = [];
let asteroids = [];
let asteroid_sizes = [];
let offsets = [];
let colors = [];
let bounding_circle_diameter = 300 + (max_asteroid_size); //360

function setup() {
  createCanvas(600, 600);
  frameRate(60);

  //Generating an array of offets using Perlin noise to randomize asteroid phase
  for (let i = 0; i < num_asteroids; i++) {
    let offset = noise(0, i);
    offsets.push(offset);
  }

  //Generating an array of asteroid sizes using Perlin noise
  for (let i = 0; i < num_asteroids; i++) {
    let size = map(noise(0, i), 0, 1, 0, max_asteroid_size);
    asteroid_sizes.push(size);
  }

  //Generating an array of colors
  for (let i = 0; i < 24; i++) {
    let color_r = 160;
    let color_g = random(100, 150);
    let color_b = random(200, 220);
    colors.push(createVector(color_r, color_g, color_b));
  }
}

function draw() {
  let file_name = 'frame' + frame_count;
  background(50);
  translate(width/2, height/2);

  //Drawing bounding circle
  push();
  fill(0, 0, 0);
  stroke(255);
  circle(0, 0, bounding_circle_diameter);
  pop();

  //Drawing asteroid tails
  push();
  for (let i = 0; i < asteroid_trails.length; i++) {
    //strokeWeight(asteroid_sizes[i % asteroid_sizes.length] / 5);
    strokeWeight(2);
    let transparency = map(i, 0, asteroid_trails.length, 0, 255);
    stroke(255, 255, 255, transparency);

    //I don't know exactly what the [-47.5] value is...
    if (i > num_asteroids && asteroid_trails[i].y > - (orbit_size - 10)) {
      //line(asteroid_trails[i].x, asteroid_trails[i].y, asteroid_trails[i - num_asteroids].x, asteroid_trails[i - num_asteroids].y);
      point(asteroid_trails[i].x, asteroid_trails[i].y);
    }
  }
  pop();

  //Drawing asteroids
  push();
  stroke(255, 255, 255, 255);
  strokeWeight(1);
  draw_asteroids();
  pop();

  

  
  //export_canvas_loop(file_name);
  update_values();
}

function draw_asteroids() {
  for (let i = 0; i < num_asteroids; i++) {
    let asteroid_size = asteroid_sizes[i];
    let c = colors[i % 12];
    asteroid = new Asteroid(offsets[i], orbit_size, i * TWO_PI / num_asteroids, asteroid_size, c);
    asteroids.push(asteroid);
    asteroid.draw();

    if (asteroids.length > num_asteroids) {
      asteroids.splice(0, 1);
    }
  }
  
  if (asteroids[0].is_at_origin()) {
    passed_origin++;
    console.log(passed_origin);
  }
}

function update_values() {
  dt += radians(.5);
  frame_count += 1;
}

function export_canvas_loop(file_name) {
  if (passed_origin > 1 && passed_origin < 3) {
    frameRate(5);
    saveCanvas(file_name, 'png');
  } else {
    frameRate(60);
  }
}