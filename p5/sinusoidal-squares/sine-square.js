class SineSquare {
    constructor(size, offset, colorOffset) {
        this.size = size;
        this.colorOffset = colorOffset;

        this.numSines = 4;
        this.sineHeight = this.size;
        this.offset = 0;
        this.offsets = new Array(this.numSines);

        for (let i = 0; i < this.offsets.length; i++) {
            this.offsets[i] = offset + (PI / this.numSines) * i;
        }
    }

    // https://p5js.org/examples/math-sine-wave.html
    draw() {
        push();
        rectMode(CENTER);
        colorMode(HSB, 24);
        noFill();
        stroke(this.colorOffset + 16, 20, 24, 12);
        strokeWeight(1.5);
        square(0, 0, this.size);
        translate(-this.size/2, 0);
        for (let i = 0; i < this.numSines; i++) {
            this.drawWave(i); //bottom
        }
        pop();
    }

    drawWave(index) {
        beginShape();
        for(var x = 0; x < this.size; x++){
            //var angle = map(x, 0, width, 0, TWO_PI);
            var angle = this.offsets[index] + x * 0.01;
            // map x between 0 and width to 0 and Two Pi
            var y = map(sin(angle), -1, 1, -this.sineHeight/2, this.sineHeight/2);
            vertex(x, y);
        }
        endShape();
        this.offsets[index] += 0.01;
    }
}