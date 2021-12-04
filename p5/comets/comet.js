class Comet {
    constructor(position, size, count) {
        this.pos_x = position.x;
        this.pos_y = position.y;
        this.size = size;
        this.c = count;

        //corners - from top-left, clockwise
        this.corner_a = createVector(position.x - size/2, position.y + size/2); //top-left
        this.corner_b = createVector(position.x + size/2, position.y + size/2); //top-right
        this.corner_c = createVector(position.x + size/2, position.y - size/2); //bottom-right
        this.corner_d = createVector(position.x - size/2, position.y - size/2); //bottom-left
        this.corners = [this.corner_a, this.corner_b, this.corner_c, this.corner_d];  //alt: c, d, a, b

        this.num_tail_squares = 50;
    }

    check_quadrant() {
        if (this.pos_x < 0 && this.pos_y > 0) { //top-left quadrant, -x +y
            return 0;
        } else if (this.pos_x > 0 && this.pos_y > 0) { //top-right quadrant, +x +y
            return 1;
        } else if (this.pos_x < 0 && this.pos_y < 0) { //bottom-left quadrant, -x -y
            return 3;
        } else { //bottom-right quadrant
            return 2;
        }
    }

    draw_tail_lines() {
        //https://stackoverflow.com/questions/2886092/finding-coordinates-of-a-point-between-two-points
        this.quadrant = this.check_quadrant();
        let corner_x = this.corners[this.quadrant].x;
        let corner_y = this.corners[this.quadrant].y;
        let r = random(0.3, 0.51);

        push();
        stroke(255, 255, 255, 255);
        strokeWeight(1);
        //line(corner_x, corner_y, r * corner_x, r * corner_y);

        //For each corner, draw a line from that corner to the specified "tail point"
        for (let i = 0; i < 4; i++) {
            if (i != this.quadrant) {
                line(this.corners[i].x, this.corners[i].y, r * corner_x, r * corner_y);
            }
        }

        pop();
    }

    draw_tail_squares() {
        this.quadrant = this.check_quadrant();
        let corner_x = this.corners[this.quadrant].x;   //x-coordinate of corner
        let corner_y = this.corners[this.quadrant].y;   //y-coordinate of corner
        let r = random(0.3, 0.51);  //scale of line from origin to center of square - 0 = at origin point, 1 = at corner point
        let tail_origin = createVector(r * corner_x, r * corner_y); //origin point of tail
        let tail_distance = createVector(this.pos_x - tail_origin.x, this.pos_y - tail_origin.y); //distance from tail origin to center of square
        let size_increment = this.size / this.num_tail_squares;
        let dist_increment = createVector(tail_distance.x / this.num_tail_squares, tail_distance.y / this.num_tail_squares);

        //console.log("tail x to pos x: " + tail_distance.x + " tail y to pos y: " + tail_distance.y);
        //console.log("tail x: " + tail_origin.x + " , tail y: " + tail_origin.y);
        //console.log(dist(this.pos_x, tail_origin.x));

        for (let i = 1; i < this.num_tail_squares; i++) {
            fill(116 - 2 * i, 2 - i, 17 - i);
            push();
            square(tail_origin.x + (i * dist_increment.x), tail_origin.y + (i * dist_increment.y), (i - 1) * size_increment);
            pop();
        }
    }

    draw_tail_circles() {
        this.quadrant = this.check_quadrant();
        let corner_x = this.corners[this.quadrant].x;   //x-coordinate of corner
        let corner_y = this.corners[this.quadrant].y;   //y-coordinate of corner
        let r = random(0.3, 0.51);  //scale of line from origin to center of square - 0 = at origin point, 1 = at corner point
        let tail_origin = createVector(r * corner_x, r * corner_y); //origin point of tail
        let tail_distance = createVector(this.pos_x - tail_origin.x, this.pos_y - tail_origin.y); //distance from tail origin to center of square
        let size_increment = this.size / this.num_tail_squares;
        let dist_increment = createVector(tail_distance.x / this.num_tail_squares, tail_distance.y / this.num_tail_squares);

        //console.log("tail x to pos x: " + tail_distance.x + " tail y to pos y: " + tail_distance.y);
        //console.log("tail x: " + tail_origin.x + " , tail y: " + tail_origin.y);
        //console.log(dist(this.pos_x, tail_origin.x));

        for (let i = 1; i < this.num_tail_squares; i++) {
            push();
            fill(116 + i, 2 + i, 17);
            circle(tail_origin.x + (i * dist_increment.x), tail_origin.y + (i * dist_increment.y), (i - 1) * size_increment);
            pop();
        }
    }

    show() {
        //this.draw_tail_lines();
        let color = this.get_color();

        push();
        //fill(255, 202, 217);
        stroke(1);
        this.draw_tail_squares();
        //this.draw_tail_circles();
        square(this.pos_x, this.pos_y, this.size);
        pop();

        console.log(this.quadrant);
        //fill(255);
    }

    get_color() {
        //https://colorpalettes.net/color-palette-4296/
        //https://colorpalettes.net/color-palette-4243/
        if (this.c % 3 == 0) {
            return '#ef0195';
        } else if (this.c % 3 == 1) {
            return '#1b96f3';
        } else if (this.c % 3 == 2) {
            return '#f68741';
        }
    }
}