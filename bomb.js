'use strict'

class Bomb{
    constructor(canvas, x, y, lives) {
        this.size = 50;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.x = x;
        this.y = y;
    };

}