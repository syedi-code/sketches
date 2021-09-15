class Particle {
    constructor() {
        this.pos = createVector(width/2, height/2);
        this.rays = [];

        //Encircles the base point with rays, radially
        for (let a = 0; a < 360; a += 5) {
            this.rays.push(new Ray(this.pos, radians(a)));
        }
    }

    update(x, y) {
        this.pos.set(x, y);
    }

    //Draws a line from the particle to the wall if the particle can see it
    look(wall) {
        for (let ray of this.rays) {
            let closest = null;
            let record = Infinity;

            //Checking all walls - distance between particle and wall and is it the closest one?
            for (let wall of walls) {
                const point = ray.cast(wall);

                if (point) {
                    const distance = p5.Vector.dist(this.pos, point);

                    if (distance < record) {
                        record = distance;
                        closest = point;
                    }
                }
            }

            if (closest) {
                stroke(255, 100);
                line (this.pos.x, this.pos.y, closest.x, closest.y);
            }
        }
    }

    show() {
        fill(255);
        ellipse(this.pos.x, this.pos.y, 4);
        for (let ray of this.rays) {
            ray.show();
        }
    }
}