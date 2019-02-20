'use strict'
//adadada
class Wall{
    constructor(canvas, x, y) {
        this.size = 50;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.x = x;
        this.y = y;
    };

    draw() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(this.x, this.y, this.size, this.size)
    }

}