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

    //Create the 9 explosions of each bomb
    explosion1() {
        return new Explosion(this.canvas, this.x, this.y);
        
    }
    explosion2() {
        return new Explosion(this.canvas, this.x - 50, this.y);
        
    }
    explosion3() {
        return new Explosion(this.canvas, this.x - 100, this.y);
        
    }
    explosion4() {
        return new Explosion(this.canvas, this.x + 50, this.y);
        
    }
    explosion5() {
        return new Explosion(this.canvas, this.x + 100, this.y);
        
    }
    explosion6() {
        return new Explosion(this.canvas, this.x, this.y - 50);
        
    }
    explosion7() {
        return new Explosion(this.canvas, this.x, this.y - 100);
        
    }
    explosion8() {
        return new Explosion(this.canvas, this.x, this.y + 50);
        
    }
    explosion9() {
        return new Explosion(this.canvas, this.x, this.y + 100);
        
    }

    explosion11() {
        return new Explosion(this.canvas, this.x, this.y);
        
    }
    explosion12() {
        return new Explosion(this.canvas, this.x - 50, this.y);
        
    }
    explosion13() {
        return new Explosion(this.canvas, this.x - 100, this.y);
        
    }
    explosion14() {
        return new Explosion(this.canvas, this.x + 50, this.y);
        
    }
    explosion15() {
        return new Explosion(this.canvas, this.x + 100, this.y);
        
    }
    explosion16() {
        return new Explosion(this.canvas, this.x, this.y - 50);
        
    }
    explosion17() {
        return new Explosion(this.canvas, this.x, this.y - 100);
        
    }
    explosion18() {
        return new Explosion(this.canvas, this.x, this.y + 50);
        
    }
    explosion19() {
        return new Explosion(this.canvas, this.x, this.y + 100);
        
    }

}