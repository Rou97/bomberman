'use strict'

class Game{
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.player;
        this.player2;
        this.wall = [];
        this.bomb;
        this.bomb2;
        this.bombs = [];
        this.explosion1;
        this.explosion2;
        this.explosion3;
        this.explosion4;
        this.explosion5;
        this.explosion6;
        this.explosion7;
        this.explosion8;
        this.explosion9;
        this.explosions;
    };

    startLoop() {

        //Players
        this.player = new Player(this.canvas, 100, 50, 1);
        this.player2 = new Player(this.canvas, 350, 450, 1);
        //this.player2 = new Player(this.canvas, 0, 0, 1);

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
            this.explosion3 = this.bomb.explosion3();
            this.explosion4 = this.bomb.explosion4();
            this.explosion5 = this.bomb.explosion5();
            this.explosion6 = this.bomb.explosion6();
            this.explosion7 = this.bomb.explosion7();
            this.explosion8 = this.bomb.explosion8();
            this.explosion9 = this.bomb.explosion9();
            delete this.bomb;
            console.log(this.bomb);
            
            //playerDamaged();            
            
            //eliminar explosion

            setTimeout(() => {
                delete this.explosion1;
                delete this.explosion2;
                delete this.explosion3;
                delete this.explosion4;
                delete this.explosion5;
                delete this.explosion6;
                delete this.explosion7;
                delete this.explosion8;
                delete this.explosion9;
                
                console.log(this.explosion1);
                console.log(this.explosion2);

            }, 1000); //modificar


        }, 2000); //modificar

    }

    buildBomb2() {
        this.bomb2 = new Bomb(this.canvas, this.player2.x, this.player2.y);
        this.bomb2.isBomb = true;

        setTimeout(() => {

            this.explosion3 = this.bomb2.explosion1();
            this.explosion4 = this.bomb2.explosion2();
            delete this.bomb2;
            console.log(this.bomb2);
            
            //playerDamaged();            
            
            //eliminar explosion

            setTimeout(() => {
                delete this.explosion3;
                delete this.explosion4;
                console.log(this.explosion3);
                console.log(this.explosion4);

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
        if(this.bomb2) {
            this.bomb2.draw();
        }
        if(this.explosion1) {
            this.explosion1.draw1();
        }
        if(this.explosion2) {
            this.explosion2.draw1();
        }
        if(this.explosion3) {
            this.explosion3.draw1();
        }
        if(this.explosion4) {
            this.explosion4.draw1();
        }
        if(this.explosion5) {
            this.explosion5.draw1();
        }
        if(this.explosion6) {
            this.explosion6.draw1();
        }
        if(this.explosion7) {
            this.explosion7.draw1();
        }
        if(this.explosion8) {
            this.explosion8.draw1();
        }
        if(this.explosion9) {
            this.explosion9.draw1();
        }

        
    };

    // checkAllCollisions() {
    //     this.player.checkScreen(); //no hace falta, posible reutilizacion
    // }

   


} 