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

}