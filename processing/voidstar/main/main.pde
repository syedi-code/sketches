int padding = 100;
int numSquares = 750;
int bgColor = 13;

void setup() {
  background(bgColor);
  size(1000, 1000);
  smooth(4);
} 

void draw() {  
  // White squares
  push();
  stroke(255);
  noFill();
  for (int i = 0; i < numSquares; i += 20) {
    if (i == 0) {
      strokeWeight(0.1);
    } else {
      strokeWeight(0.1);
    }
    
    rectMode(CENTER);
    int rectSize = width - (padding * 2);
    rect(width/2, height/2, rectSize - i, rectSize - i);
  }
  pop();
  
  // Top left
  push();
  rotate(PI/4);
  stroke(bgColor);
  strokeWeight(1);
  noFill();
  translate(0, -500);
  for (int i = 0; i < numSquares; i += 10) {
    rectMode(CENTER);
    int rectSize = width/2 - (padding * 2);
    rect(width/2, height/2, rectSize - i, rectSize - i);
  }
  pop();
  
  //push();
  //rotate(PI/4);
  //stroke(255);
  //strokeWeight(0.1);
  //noFill();
  //translate(0, -500);
  //for (int i = 0; i < numSquares; i += 10) {
  //  rectMode(CENTER);
  //  int rectSize = width/2 - (padding * 2);
  //  rect(width/2, height/2, rectSize - i, rectSize - i);
  //}
  //pop();
  
  // Center right
  push();
  rotate(PI/4);
  stroke(bgColor);
  strokeWeight(2);
  noFill();
  translate(400, -600);
  for (int i = 0; i < numSquares/5; i += 10) {
    rectMode(CENTER);
    int rectSize = width/3 - (padding * 2);
    rect(width/2, height/2, rectSize - i, rectSize - i);
  }
  pop();
  
  // Bottom
  push();
  rotate(PI/4);
  stroke(bgColor);
  strokeWeight(2);
  noFill();
  translate(400, -300);
  for (int i = 0; i < numSquares/4; i += 10) {
    rectMode(CENTER);
    int rectSize = width/2 - (padding * 2);
    rect(width/2, height/2, rectSize - i, rectSize - i);
  }
  pop();
}
