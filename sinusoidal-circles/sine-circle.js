class SineCircle {
    constructor(dt, radius, a, n, resolution, color_offset) {
        this.r_osc = map(sin(100 * dt), -1, 1, -10, 10);
        this.dt = dt;
        this.r = radius;
        this.res = resolution;

        this.a = a;
        this.n = n;
        this.color_offset = color_offset;
    }

    // https://community.ptc.com/t5/3D-Part-Assembly-Design/wavy-circle-by-equation/m-p/563286#M67975
    draw() {
        beginShape();
        for (let angle = 0; angle < 180; angle += this.res) {
            let x = (this.r + this.a * sin(this.n * this.dt * angle)) * cos(this.dt * angle);
            let y = (this.r + this.a * sin(this.n * this.dt * angle)) * sin(this.dt * angle);
            let r = map(cos(this.color_offset + angle * 0.25), -1, 1, 50, 220);
            let g = map(sin(this.color_offset + angle * 0.25), -1, 1, 50, 220);
            
            push();
            translate(x, y, 0);
            //stroke(0);
            stroke(r, g, 220, 220);
            sphere(5);
            pop();
        }
        endShape();
    }

    oscillate() {
        this.r = this.r_osc + this.r;
    }
}