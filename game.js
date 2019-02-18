'use strict'

class Game{
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.player;
        this.player2;
        this.wall = [];
        this.bomb;
        this.bombs = [];
        this.explosion1;
        this.explosion2;
        this.explosions;
    };

    startLoop() {

        //Players
        this.player = new Player(this.canvas, 100, 50, 1);
        this.player2 = new Player(this.canvas, 350, 450, 1);

        //wall
        for (let i = 0; i < 11; i++) {
            this.wall[i] = [];
            for (let j = 0; j < 11; j++) {
                if (j === 0) {
                    this.wall[i][j] = new Wall(this.canvas, i * 50, j * 50);
                }
                if (i === 0) {
                    this.wall[i][j] = new Wall(this.canvas, i * 50, j * 50);
                }
                if (i === 10) {
                    this.wall[i][j] = new Wall(this.canvas, i * 50, j * 50);
                } 
                if (j === 10) {
                    this.wall[i][j] = new Wall(this.canvas, i * 50, j * 50);
                }
                if((j%2) === 0 && (i%2) === 0) {
                    this.wall[i][j] = new Wall(this.canvas, i * 50, j * 50);
                }
            }
        }

        //this.wall = new Wall(this.canvas, 150, 150);


        const loop = () => {

            //this.checkAllCollisions();
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
        this.bomb = new Bomb(this.canvas, this.player.x, this.player.y);
        this.bomb.isBomb = true;

        setTimeout(() => {

            this.explosion1 = this.bomb.explosion1();
            this.explosion2 = this.bomb.explosion2();
            delete this.bomb;
            console.log(this.bomb);
            
            //playerDamaged();            
            
            //eliminar explosion

            setTimeout(() => {
                delete this.explosion1;
                delete this.explosion2;
                console.log(this.explosion1);
                console.log(this.explosion2);

            }, 1000); //modificar


        }, 2000); //modificar



    }

    drawCanvas() {
        this.player.draw();
        this.player2.draw();
        //this.wall.draw();
        this.wall.forEach(wallArray => {
            wallArray.forEach(wall => {
                wall.draw();
            })
        })
        if(this.bomb) {
            this.bomb.draw();
        }
        if(this.explosion1) {
            this.explosion1.draw1();
        }
        if(this.explosion2) {
            this.explosion2.draw2();
        }
        
    };

    // checkAllCollisions() {
    //     this.player.checkScreen(); //no hace falta, posible reutilizacion
    // }

   


} 