class Spiral {
    constructor(x, y, velocity, angular_velocity, dt) {
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.angular_velocity = angular_velocity;
        this.dt = dt;
    }

    get_pos_x() {
        this.x = (this.velocity * this.dt) * cos(this.angular_velocity * this.dt);
        return this.x;
    }

    get_pos_y() {
        this.y = (this.velocity * this.dt) * sin(this.angular_velocity * this.dt);
        return this.y;
    }

    draw_point() {
        stroke(0);
        strokeWeight(5);
        point(this.x, this.y);
    }

    draw_square(size, r, g, b, alpha = 255) { 
        fill(r, g, b, alpha);
        translate(this.x, this.y);
        strokeWeight(0.5);
        //stroke(size);
        ellipse(0, 0, size);
    }
}