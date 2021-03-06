'use strict'

class Player{
    constructor(canvas, x, y, lives, color) {
        this.size = 50;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.x = x;
        this.y = y;
        this.speed = 0;
        this.direction = 0;
        this.lives = lives;
        this.color = color;
    };


    draw() {
        this.ctx.fillStyle = this.color;
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

    checkCollisions(tecla, wall) {
        if(tecla === 1) {
            if ( (this.y + 1) + this.size >  wall.y && this.x < wall.x + wall.size && this.x + this.size > wall.x && (this.y - 1) + this.size < wall.y + wall.size )  {
                return true; 
            }
        }
        if(tecla === 2) {
            if ( this.y - 1  <  wall.y + wall.size && this.x < wall.x + wall.size && this.x + this.size > wall.x && (this.y - 1) + this.size > wall.y )  {
                return true; 
            }
        }
        if(tecla === 3){ 
            if ( (this.x + 1) + this.size >  wall.x && this.y < wall.y + wall.size && this.y + this.size > wall.y && (this.x - 1) + this.size < wall.x + wall.size ) {
                return true; 
            }
        }

        if(tecla === 4){
            if ( this.x - 1  <  wall.x + wall.size && this.y < wall.y + wall.size && this.y + this.size > wall.y && (this.x ) + this.size > wall.x  ) {
                return true; 
            }
        }

    }

    checkExplosion(tecla, wall) {
        if(wall === undefined) {
            return false;
        }
        if(tecla === 1) {
            if ( (this.y + 1) + this.size >  wall.y && this.x < wall.x + wall.size && this.x + this.size > wall.x && (this.y - 1) + this.size < wall.y + wall.size )  {
                return true; 
            }
        }
        if(tecla === 2) {
            if ( this.y - 1  <  wall.y + wall.size && this.x < wall.x + wall.size && this.x + this.size > wall.x && (this.y - 1) + this.size > wall.y )  {
                return true; 
            }
        }
        if(tecla === 3){ 
            if ( (this.x + 1) + this.size >  wall.x && this.y < wall.y + wall.size && this.y + this.size > wall.y && (this.x - 1) + this.size < wall.x + wall.size ) {
                return true; 
            }
        }

        if(tecla === 4){
            if ( this.x - 1  <  wall.x + wall.size && this.y < wall.y + wall.size && this.y + this.size > wall.y && (this.x ) + this.size > wall.x  ) {
                return true; 
            }
        }

    }



};
