class DropBox {
    constructor(x, width, height) {
        this.x = x;
        this.w = width;
        this.h = height;

        this.hBase = height;
    }

    draw() {
        stroke(0);
        strokeWeight(1);
        colorMode(HSB, width)
        fill(this.x, 200, 500);
        //rect(this.x, -this.h + map(dt, 0, dtMax, 0, 2 * this.h), this.w, this.h);
        box(10, -this.h + map(dt, 0, dtMax, 0, 2 * this.h), this.x);

        this.h = map(sin(dt), -1, 1, this.hBase/2, this.hBase * 1.5);
    }
}