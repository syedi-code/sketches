class Triangle {
    constructor(center_x, center_y, height, r) {
        //https://stackoverflow.com/questions/11449856/draw-a-equilateral-triangle-given-the-center
        this.c_x = center_x;
        this.c_y = center_y + (height/2);
        this.a_x = (this.c_x * cos(240)) - (this.c_y * sin(240)) + height/4;
        this.a_y = center_y - (height/2);
        this.b_x = ((this.c_x * cos(120)) - (this.c_y * sin(120))) - height/4;
        this.b_y = center_y - (height/2);
    }

    show() {
        stroke(255);
        fill(0, 0, 0, 0);
        rotate(tri_r);
        triangle(this.a_x, this.a_y, this.b_x, this.b_y, this.c_x, this.c_y);
    }
}