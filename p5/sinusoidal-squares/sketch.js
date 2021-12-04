var t = 0;
var rows = 8;
var columns = 8;
let margin = 20;

let sineSquare;
let sineSquares = [];
let size;

function setup() {
  createCanvas(800, 800);
  size = (width/rows) - margin/2;

  for (let i = 0; i < rows * columns; i++) {
    sineSquares.push(new SineSquare(size, 0, i % 8));
  }
}

function draw() {
  background(15);

  push();
    push();
      translate(margin*2 + size/2, margin*2 + size/2);
      drawSquares();
    pop();

    // push();
    //   translate(715, margin*2 + size/2);
    //   rotate(PI/2);
    //   drawSquares();
    // pop();

    // push();
    //   translate(715, 715);
    //   rotate(PI);
    //   drawSquares();
    // pop();

    // push();
    //   translate(87.5, 715);
    //   rotate(3 * PI / 2);
    //   drawSquares();
    // pop();
  pop();

  if (sineSquares[0].offsets[0] > TAU) {
    noLoop();
  }
}

function drawSquares() {
  for (let i = 1; i < (rows * columns) + 1; i++) {
    sineSquares[i - 1].draw();

    translate(size, 0);
    if (i % 8 == 0 && i != 0) {
      translate(-size * 8, size)
    }
  }
}