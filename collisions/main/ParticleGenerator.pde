class ParticleGenerator {
  int birthTime, deathTime;
  int cooldown = 1000; // in milliseconds
  
  ParticleGenerator(int bt) {
    birthTime = bt;
  }
  
  boolean readyToUpdate(int currTime) {
    if (currTime > birthTime + cooldown) {
      birthTime = currTime;
      return true;
    }
    
    return false;
  }
  
  Particle generateNewParticle() {
    Particle newParticle = new Particle(random(0, width), random(0, height), random(4, 15));
    return newParticle;
  }
}
