int padding = 50;

void setup() {
  background(13);
  size(800, 800);
} 

void draw() {
  translate(padding, padding);
  
  push();
  stroke(0);
  for (int i = 0; i < 10; i++) {
    rect(0, 0, 25, 100);
  }
  pop();
}
