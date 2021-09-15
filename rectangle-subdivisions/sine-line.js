class SineLine {
    constructor(height, width, offset, side, spiral, complex_mode) {
        this.h = height;
        this.w = width;
        this.offset = offset;
        this.side = side;
        this.spiral = spiral;

        this.mode = complex_mode;

        this.local_t = 0;
        this.y_off = 0;
        //this.x_off = t < tEnd/2 ? map(t, 0, tEnd/2, 0, width/2) : map(t, tEnd/2, tEnd, 0, width/2);
    }

    draw() {
        let x_off;
        if (this.spiral == 'one') {
            if (this.side == LEFT) {
                x_off = map(cos(this.local_t + 180), -1, 1, 0, this.w/2) + this.local_t;
            } else if (this.side == RIGHT) {
                x_off = map(cos(this.local_t + 180), -1, 1, this.w, this.w/2) - this.local_t;
            }
        } else if (this.spiral == 'two') {
            if (this.side == LEFT) {
                x_off = map(cos(this.local_t + 180), -1, 1, 0, this.w/2) - this.local_t;
            } else if (this.side == RIGHT) {
                x_off = map(cos(this.local_t + 180), -1, 1, this.w, this.w/2) + this.local_t;
            }
        } else if (this.spiral == 'three') {
            if (this.side == LEFT) {
                x_off = map(cos(this.local_t + 180), -1, 1, 0, this.w/2) - this.local_t;
            } else if (this.side == RIGHT) {
                x_off = map(cos(this.local_t + 180), -1, 1, this.w, this.w/2) - this.local_t;
            }
        } else if (this.spiral == 'four') {
            if (this.side == LEFT) {
                x_off = map(cos(this.local_t + 180), -1, 1, 0, this.w/2) - this.local_t;
            } else if (this.side == RIGHT) {
                x_off = map(cos(this.local_t + 180), -1, 1, this.w, this.w/2) - this.local_t;
            }
        }

        push();
        let x = 0 + x_off;
        let y1;
        let y2;

        if (this.mode == 1) {
            //shearX(this.local_t);
            y1 = 0 + this.y_off + map(sin(this.local_t), -1, 1, 100, -100);
            y2 = -this.h + this.y_off + map(sin(this.local_t), -1, 1, 100, -100);
        } else if (this.mode == 2) {
            y1 = 0 + this.y_off + this.local_t;
            y2 = -this.h + this.y_off - sin(this.local_t);
        } else if (this.mode == 3) {
            y1 = 0 + this.y_off;
            y2 = -this.h + this.y_off;
        }

        colorMode(HSL, 360);
        stroke(map(cos(this.local_t), -1, 1, 240, 320), 360, 180);
        line(x, y1, x, y2);
        pop();

        if (this.local_t < tEnd) {
            this.local_t += timescale;
            this.y_off += timescale;
        }
    }
}