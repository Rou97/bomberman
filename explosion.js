'use strict'

class Explosion {
    constructor(canvas, x, y,) {
        this.size1 = 50;
        this.size2 = 50;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.x = x;
        this.y = y;
        this.nx;
        this.ny;
    };

    draw1() {
        this.ctx.fillStyle = "orange";
        this.ctx.fillRect(this.x, this.y, this.size1, this.size2 + 200)
    }

    draw2() {
        this.ctx.fillStyle = "orange";
        this.ctx.fillRect(this.x, this.y, this.size1 + 200, this.size2)
    }

    delete() {
        //eliminar explosion

        setTimeout(() => {
            delete game.explosion1;
            delete game.explosion2;
            console.log(game.explosion1);
            console.log(game.explosion1);

        }, 1000); //modificar
    }

    

}