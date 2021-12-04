class Ripple {
  PVector position = new PVector(0, 0);
  
  float radius, t;
  float timescale = 1;
  
  Ripple(float x, float y, float r) {
    position.x = x;
    position.y = y;
    
    radius = r * 10;
    t = 0;
  }
  
  Ripple(Particle b) {
    position.x = b.position.x;
    position.y = b.position.y;
    
    radius = b.radius * 3;
    t = 0;
  }
  
  void update() {
    push();
    
    t += timescale;
    strokeWeight(map(t, 0, radius + 1, 1.5, 0));
    stroke(255);
    noFill();
    ellipse(position.x, position.y, t, t);
    
    pop();
  }
  
  boolean checkDeletion() {
     if (t > radius) {
       return true;
     }
     
     return false;
  }
}
