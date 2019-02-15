'use strict'

class Game{
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.player;
        this.wall;
        this.bomb;
        this.bombs = [];
    };

    startLoop() {

        //Players
        this.player = new Player(this.canvas, 0, 0, 1);

        //Walls
        this.wall = new Wall(this.canvas, 150, 150);


        const loop = () => {

            this.checkAllCollisions();
            // this.updateCanvas();
            this.clearCanvas();
            this.drawCanvas();
            window.requestAnimationFrame(loop);
        }

        window.requestAnimationFrame(loop);
    }

    // updateCanvas() {
    //     this.player.update();
    // };

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };

    buildBomb() {
        this.bomb = new Bomb(this.canvas, 250, 250);
        this.bomb.isBomb = true;

        setTimeout(this.bomb.explosion, 2000); 
    }

    drawCanvas() {
        this.player.draw();
        this.wall.draw();
        if(this.bomb) {
            this.bomb.draw();
        }
        
    };

    checkAllCollisions() {
        this.player.checkScreen(); //no hace falta, posible reutilizacion
    }

   


} 