'use strict'

class Game{
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.player;
        this.player2;
        this.wall = [];
        this.bomb;
        this.bomb1;
        this.bomb2;
        this.bomb3;
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
        this.explosion11;
        this.explosion12;
        this.explosion13;
        this.explosion14;
        this.explosion15;
        this.explosion16;
        this.explosion17;
        this.explosion18;
        this.explosion19;
        this.explosions = [];
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



        const loop = () => {

            this.clearCanvas();
            this.drawCanvas();
            window.requestAnimationFrame(loop);
        }

        window.requestAnimationFrame(loop);
    }


    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };

    buildBomb() {
        if (this.bomb === undefined) {
            console.log('1111111111');
            this.bomb = new Bomb(this.canvas, this.player.x, this.player.y);

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
                    
    
                }, 1000); //modificar
    
    
            }, 2000); //modificar

        } else {
        //if (this.bomb != undefined && this.bomb1 === undefined) {
            console.log('22222222222');
            this.bomb1 = new Bomb(this.canvas, this.player.x, this.player.y);

            setTimeout(() => {
    
                //1
    
                this.explosion1 = this.bomb1.explosion11();
                this.explosion2 = this.bomb1.explosion12();
                this.explosion3 = this.bomb1.explosion13();
                this.explosion4 = this.bomb1.explosion14();
                this.explosion5 = this.bomb1.explosion15();
                this.explosion6 = this.bomb1.explosion16();
                this.explosion7 = this.bomb1.explosion17();
                this.explosion8 = this.bomb1.explosion18();
                this.explosion9 = this.bomb1.explosion19();
                delete this.bomb1;                   
                
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
                    
    
                }, 1000); //modificar
    
    
            }, 2000); //modificar

        }

    }

    buildBomb2() {
        if(this.bomb2 === undefined) {
            this.bomb2 = new Bomb(this.canvas, this.player2.x, this.player2.y);

            setTimeout(() => {
                this.explosion11 = this.bomb2.explosion1();
                this.explosion12 = this.bomb2.explosion2();
                this.explosion13 = this.bomb2.explosion3();
                this.explosion14 = this.bomb2.explosion4();
                this.explosion15 = this.bomb2.explosion5();
                this.explosion16 = this.bomb2.explosion6();
                this.explosion17 = this.bomb2.explosion7();
                this.explosion18 = this.bomb2.explosion8();
                this.explosion19 = this.bomb2.explosion9();
                delete this.bomb2;                   
                
                //eliminar explosion
    
                setTimeout(() => {
                    delete this.explosion11;
                    delete this.explosion12;
                    delete this.explosion13;
                    delete this.explosion14;
                    delete this.explosion15;
                    delete this.explosion16;
                    delete this.explosion17;
                    delete this.explosion18;
                    delete this.explosion19;
                    
    
                }, 1000); //modificar
    
    
            }, 2000); //modificar

        } else {
            this.bomb3 = new Bomb(this.canvas, this.player2.x, this.player2.y);

            setTimeout(() => {
                this.explosion11 = this.bomb3.explosion11();
                this.explosion12 = this.bomb3.explosion12();
                this.explosion13 = this.bomb3.explosion13();
                this.explosion14 = this.bomb3.explosion14();
                this.explosion15 = this.bomb3.explosion15();
                this.explosion16 = this.bomb3.explosion16();
                this.explosion17 = this.bomb3.explosion17();
                this.explosion18 = this.bomb3.explosion18();
                this.explosion19 = this.bomb3.explosion19();
                delete this.bomb3;                   
                
                //eliminar explosion
    
                setTimeout(() => {
                    delete this.explosion11;
                    delete this.explosion12;
                    delete this.explosion13;
                    delete this.explosion14;
                    delete this.explosion15;
                    delete this.explosion16;
                    delete this.explosion17;
                    delete this.explosion18;
                    delete this.explosion19;
                    
    
                }, 1000); //modificar
    
    
            }, 2000); //modificar

        }

        // setTimeout(() => {

        //     this.explosion11 = this.bomb2.explosion1();
        //     this.explosion12 = this.bomb2.explosion2();
        //     this.explosion13 = this.bomb2.explosion3();
        //     this.explosion14 = this.bomb2.explosion4();
        //     this.explosion15 = this.bomb2.explosion5();
        //     this.explosion16 = this.bomb2.explosion6();
        //     this.explosion17 = this.bomb2.explosion7();
        //     this.explosion18 = this.bomb2.explosion8();
        //     this.explosion19 = this.bomb2.explosion9();
        //     delete this.bomb2;      
            
        //     //eliminar explosion

        //     setTimeout(() => {
        //         delete this.explosion11;
        //         delete this.explosion12;
        //         delete this.explosion13;
        //         delete this.explosion14;
        //         delete this.explosion15;
        //         delete this.explosion16;
        //         delete this.explosion17;
        //         delete this.explosion18;
        //         delete this.explosion19;

        //     }, 1000); //modificar


        // }, 2000); //modificar

    }

    drawCanvas() {
        this.player.draw();
        this.player2.draw();
        this.wall.forEach(wallArray => {
            wallArray.forEach(wall => {
                wall.draw();
            })
        })
        if(this.bomb) {
            this.bomb.draw();
        }
        if(this.bomb1) {
            this.bomb1.draw();
        }
        if(this.bomb2) {
            this.bomb2.draw();
        }
        if(this.bomb3) {
            this.bomb3.draw();
        }

        //Draw of the 9 explosions of 1st bomb of 1st player
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

        //Draw of the 9 explosions of 1st bomb of 2nd player
        if(this.explosion11) {
            this.explosion11.draw1();
        }
        if(this.explosion12) {
            this.explosion12.draw1();
        }
        if(this.explosion13) {
            this.explosion13.draw1();
        }
        if(this.explosion14) {
            this.explosion14.draw1();
        }
        if(this.explosion15) {
            this.explosion15.draw1();
        }
        if(this.explosion16) {
            this.explosion16.draw1();
        }
        if(this.explosion17) {
            this.explosion17.draw1();
        }
        if(this.explosion18) {
            this.explosion18.draw1();
        }
        if(this.explosion19) {
            this.explosion19.draw1();
        }

        
    };


} 