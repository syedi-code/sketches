/**
 * Circle Collision with Swapping Velocities
 * by Ira Greenberg. 
 * 
 * Based on Keith Peter's Solution in
 * Foundation Actionscript Animation: Making Things Move!
 */
 
ArrayList<Particle> particles = new ArrayList<Particle>();
ParticleGenerator generator = new ParticleGenerator(millis());

// initial values
int numParticles = 3;

void setup() {
  size(1000, 1000);
  for (int i = 0; i < numParticles; i++) {
    particles.add(new Particle(random(0, width), random(0, height), random(4, 15)));
  }
  
  colorMode(HSB, 255);
}

void draw() {
  background(21);

  for (Particle b : particles) {
    b.update();
    b.display();
    b.checkBoundaryCollision();
  }
  
  // Check collision against every other Particle
  for (int i = 0; i < particles.size(); i++) {
    for (int j = 0; j < particles.size(); j++) {
      if (i != j) {
        particles.get(i).checkCollision(particles.get(j));
      }
    }
  }
  
  // Spawn new particles
  if (generator.readyToUpdate(millis())) {
    particles.add(generator.generateNewParticle());
    
  }
}
