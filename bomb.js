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

    explosion1() {
        this.explos = true;
        console.log('explosion1: ', this.explos);
        //return [new Explosion(this.canvas, this.x, this.y - 50), new Explosion(this.canvas, this.x, this.y - 50)]
        return new Explosion(this.canvas, this.x, this.y - 100);
        
    }
    explosion2() {
        this.explos = true;
        console.log('explosion2: ', this.explos);
        //return [new Explosion(this.canvas, this.x, this.y - 50), new Explosion(this.canvas, this.x, this.y - 50)]
        return new Explosion(this.canvas, this.x - 100, this.y);
        
    }

}