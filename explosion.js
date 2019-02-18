'use strict'

class Explosion {
    constructor(canvas, x, y,) {
        this.size = 50;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.x = x;
        this.y = y;
        this.nx;
        this.ny;
    };

    draw1() {
        this.ctx.fillStyle = "orange";
        this.ctx.fillRect(this.x, this.y, this.size, this.size)
    }


}