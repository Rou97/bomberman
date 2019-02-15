'use strict'

class Bomb{
    constructor(canvas, x, y,) {
        this.size = 50;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.x = x;
        this.y = y;
        this.color = "red";
        this.explos = false;
    };

    draw() {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.x, this.y, this.size, this.size)
    }

    explosion() {
        this.explos = true;
        console.log('explosion: ', this.explos);
        this.size = 100;
    }

}