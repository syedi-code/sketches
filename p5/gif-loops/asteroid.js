class Asteroid {
    constructor(phase, orbit_size, rotation_angle, body_size, color_vector) {
        this.phase = phase;
        this.width = orbit_size; // * 0.8
        this.height = orbit_size;
        this.rotation = rotation_angle;
        this.size = body_size;

        this.init_x = 5 *round((this.width * cos(this.phase) * cos(this.rotation)) - (this.height * sin(this.phase) * sin(this.rotation)));
        this.init_y = 1.33 * round((this.width * cos(this.phase) * sin(this.rotation)) + (this.height * sin(this.phase) * cos(this.rotation)));
        this.x;
        this.y;
        this.r = color_vector.x;
        this.g = color_vector.y;
        this.b = color_vector.z;

        this.depth;
        this.trail_length = 1000;
    }

    // Rotation_angle is in radians
    // https://math.stackexchange.com/questions/2645689/what-is-the-parametric-equation-of-a-rotated-ellipse-given-the-angle-of-rotatio
    draw() {
        this.x = 5 * round((this.width * cos(dt + this.phase) * cos(this.rotation)) - (this.height * sin(dt + this.phase) * sin(this.rotation)));
        this.y = 1.33 * round((this.width * cos(dt + this.phase) * sin(this.rotation)) + (this.height * sin(dt + this.phase) * cos(this.rotation)));
        let position = createVector(this.x, this.y);
        
        if ((this.y > 0 && this.is_intersecting_center() == 0) || !this.is_intersecting_center() == 0) {
            push();
            strokeWeight(this.size);
            stroke(this.r, this.g, this.b);
            point(this.x, this.y);
            pop();
        }
    
        asteroid_trails.push(position);
        if (asteroid_trails.length > this.trail_length) {
            asteroid_trails.splice(0, 1);
        }
    }

    is_at_origin() {
        if (this.x == this.init_x && this.y == this.init_y) {
            console.log("At origin.");
            return true;
        }

        return false;
    }

    // https://www.geeksforgeeks.org/check-two-given-circles-touch-intersect/
    // x2 and y2 are 0, at origin
    is_intersecting_center() {
        let c1c2 = sqrt(this.x * this.x + this.y * this.y);
        let r1 = this.size / 2;
        let r2 = bounding_circle_diameter / 2;

        if (c1c2 == r1 + r2) {
            return 1;
        } else if (c1c2 > r1 + r2) {
            return -1;
        } else if (c1c2 < r1 + r2) {
            return 0;
        }
    }
}