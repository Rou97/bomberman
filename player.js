'use strict'

class Player{
    constructor(canvas, x, y, lives) {
        this.size = 50;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.x = x;
        this.y = y;
        this.speed = 50;
        this.direction = 0;
        this.lives = lives;
    };

    update() {
        // this.x = this.x + this.direction * this.speed;
        //this.y = this.y + this.direction * this.speed;
    };

    draw() {
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(this.x, this.y, this.size, this.size)
    }

    changeDirection(tecla, steps) {
        if(tecla === 1){
            this.y += steps;
        }
        if(tecla === 2){
            this.y -= steps;
        }
        if(tecla === 3){
            this.x += steps;
        }
        if(tecla === 4){
            this.x -= steps;
        }
    }

    checkScreen() {
        if(this.y - this.size/2 <= 0) {
            this.direction = 1;
        } else if (this.y + this.size/2 >= this.canvas.height)  {
            this.direction = -1;
        };
    };

    loseLive() {

    }

};
