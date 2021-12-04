var particles = []
var numParticles = 10

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle(random(0, width), random(0, height), random(4, 15)));
  }

  colorMode(HSB, 255);
}

function draw() {
  background(255);

  push()
  stroke(0)
  strokeWeight(3)
  noFill()
  square(0, 0, width)
  pop()

  for (let p of particles) {
    p.update()
    p.display()
    p.checkBoundaryCollision()
  }

  for (let i = 0; i < particles.length; i++) {
    for (let j = 0; j < particles.length; j++) {
      if (i != j) {
        particles[i].checkCollision(particles[j]);
      }
    }
  }
}

function mousePressed() {
  var mousePos = createVector(mouseX, mouseY)
  var valid = true
  
  for (let p of particles) {
    if ((mouseX < p.pos.x + p.r && mouseX > p.pos.x - p.r) && (mouseY < p.pos.y + p.r && mouseY > p.pos.y - p.r)) {
      console.log("particle clicked")
      valid = false
    }
  }
  
  if (valid) {
    particles.push(new Particle(mouseX, mouseY, random(4, 15)));
  }
}
