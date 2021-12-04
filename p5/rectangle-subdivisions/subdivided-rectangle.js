class SubdividedRectangle {
    constructor(origin, width, height) {
        this.origin = origin;
        this.w = width;
        this.h = height;

        this.sinelines = [];
        this.subdivisions = 8;
        this.x_off = t < tEnd/2 ? map(t, 0, tEnd/2, 0, width/2) : map(t, tEnd/2, tEnd, 0, width/2);
    }

    draw() {
        push();
        noFill();
        stroke(0);
        rectMode(CENTER);
        rect(this.origin.x, this.origin.y, this.w, this.h);
        this.subdivide();
        pop();
    }

    subdivide() {
        translate(0 - this.w/2, 0 + this.h/2);   //top-left corner
    }

    static_subdivisions() {
        for (let i = 0; i < this.subdivisions; i++) {
            let offset = this.w/this.subdivisions;            
            translate(0 + offset, 0);
            let x = 0;
            let y1 = 0;
            let y2 = -this.h;
            line(x, y1, x, y2);
        }
    }
}