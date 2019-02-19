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
        this.player1Bombs = [];
        this.player2Bombs = [];
        this.explosion1;
        this.explosion2;
        this.explosion3;
        this.explosion4;
        this.explosion5;
        this.explosion6;
        this.explosion7;
        this.explosion8;
        this.explosion9;
    
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
        if(this.player1Bombs.length <= 0 )  {
            this.player1Bombs.push(new Bomb(this.canvas, this.player.x, this.player.y));
            console.log(this.player1Bombs.length);
        }
    }
    //     if (this.bomb === undefined) {
    //         this.bomb = new Bomb(this.canvas, this.player.x, this.player.y);

    //         setTimeout(() => {

    //             this.checkWall(this.bomb);
    //             delete this.bomb;                  
    
    //             setTimeout(() => {

    //                 this.deleteExplosions();   
    
    //             }, 1000); 
    
    //         }, 2000); 
            

    //     } else {
    //         this.bomb1 = new Bomb(this.canvas, this.player.x, this.player.y);

    //         setTimeout(() => {
    
    //             this.checkWall(this.bomb1);
    //             delete this.bomb1;                   
                
    //             //eliminar explosion
    
    //             setTimeout(() => {

    //                 this.deleteExplosions();   
                    
    //             }, 1000); 
    
    
    //         }, 2000); 

    //     }   

    // }

    buildBomb2() {
        if(this.bomb2 === undefined) {
            this.bomb2 = new Bomb(this.canvas, this.player2.x, this.player2.y);

            setTimeout(() => {
                this.explosion1 = this.bomb2.explosion1();
                this.explosion2 = this.bomb2.explosion2();
                this.explosion3 = this.bomb2.explosion3();
                this.explosion4 = this.bomb2.explosion4();
                this.explosion5 = this.bomb2.explosion5();
                this.explosion6 = this.bomb2.explosion6();
                this.explosion7 = this.bomb2.explosion7();
                this.explosion8 = this.bomb2.explosion8();
                this.explosion9 = this.bomb2.explosion9();
                delete this.bomb2;                   
                
                //eliminar explosion
    
                setTimeout(() => {
                
                    this.deleteExplosions();       
    
                }, 1000); //modificar
    
    
            }, 2000); //modificar

        } else {
            this.bomb3 = new Bomb(this.canvas, this.player2.x, this.player2.y);

            setTimeout(() => {
                this.explosion1 = this.bomb3.explosion1();
                this.explosion2 = this.bomb3.explosion2();
                this.explosion3 = this.bomb3.explosion3();
                this.explosion4 = this.bomb3.explosion4();
                this.explosion5 = this.bomb3.explosion5();
                this.explosion6 = this.bomb3.explosion6();
                this.explosion7 = this.bomb3.explosion7();
                this.explosion8 = this.bomb3.explosion8();
                this.explosion9 = this.bomb3.explosion9();
                delete this.bomb3;                   
                
                //eliminar explosion
    
                setTimeout(() => {
                    
                    this.deleteExplosions();   
    
                }, 1000); 
    
    
            }, 2000); 

        }

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
        
    };

    checkWall(bomb) {
        if(bomb.x === 50 && bomb.y === 50) {
            this.explosion1 = bomb.explosion1();
            this.explosion4 = bomb.explosion4();
            this.explosion5 = bomb.explosion5();
            this.explosion8 = bomb.explosion8();
            this.explosion9 = bomb.explosion9();
        } else if (bomb.x === 50 && bomb.y === 450) {
            this.explosion1 = bomb.explosion1();
            this.explosion4 = bomb.explosion4();
            this.explosion5 = bomb.explosion5();
            this.explosion6 = bomb.explosion6();
            this.explosion7 = bomb.explosion7();
        } else if(bomb.x === 50 && bomb.y === 100) {
            this.explosion1 = bomb.explosion1();
            this.explosion6 = bomb.explosion6();
            this.explosion8 = bomb.explosion8();
            this.explosion9 = bomb.explosion9();
        } else if(bomb.x === 50 && bomb.y === 400) {
            this.explosion1 = bomb.explosion1();
            this.explosion6 = bomb.explosion6();
            this.explosion7 = bomb.explosion7();
            this.explosion8 = bomb.explosion8();
        } else if (bomb.x === 50 && (bomb.y === 200 || bomb.y === 300)) {
            this.explosion1 = bomb.explosion1();
            this.explosion6 = bomb.explosion6();
            this.explosion7 = bomb.explosion7();
            this.explosion8 = bomb.explosion8();
            this.explosion9 = bomb.explosion9();
        } else if(bomb.x === 50) {
            this.explosion1 = bomb.explosion1();
            this.explosion4 = bomb.explosion4();
            this.explosion5 = bomb.explosion5();
            this.explosion6 = bomb.explosion6();
            this.explosion7 = bomb.explosion7();
            this.explosion8 = bomb.explosion8();
            this.explosion9 = bomb.explosion9();
        }

        if(this.bomb.x === 450 && this.bomb.y === 50) {
            this.explosion1 = this.bomb.explosion1();
            this.explosion2 = this.bomb.explosion2();
            this.explosion3 = this.bomb.explosion3();
            this.explosion8 = this.bomb.explosion8();
            this.explosion9 = this.bomb.explosion9();
        } else if (this.bomb.x === 450 && this.bomb.y === 450) {
            this.explosion1 = this.bomb.explosion1();
            this.explosion2 = this.bomb.explosion2();
            this.explosion3 = this.bomb.explosion3();
            this.explosion6 = this.bomb.explosion6();
            this.explosion7 = this.bomb.explosion7();
        } else if(this.bomb.x === 450 && this.bomb.y === 100) {
            this.explosion1 = this.bomb.explosion1();
            this.explosion6 = this.bomb.explosion6();
            this.explosion8 = this.bomb.explosion8();
            this.explosion9 = this.bomb.explosion9();
        } else if(this.bomb.x === 450 && this.bomb.y === 400) {
            this.explosion1 = this.bomb.explosion1();
            this.explosion6 = this.bomb.explosion6();
            this.explosion7 = this.bomb.explosion7();
            this.explosion8 = this.bomb.explosion8();
        } else if (this.bomb.x === 450 && (this.bomb.y === 200 || this.bomb.y === 300)) {
            this.explosion1 = this.bomb.explosion1();
            this.explosion6 = this.bomb.explosion6();
            this.explosion7 = this.bomb.explosion7();
            this.explosion8 = this.bomb.explosion8();
            this.explosion9 = this.bomb.explosion9();
        } else if(this.bomb.x === 450) {
            this.explosion1 = this.bomb.explosion1();
            this.explosion2 = this.bomb.explosion2();
            this.explosion3 = this.bomb.explosion3();
            this.explosion6 = this.bomb.explosion6();
            this.explosion7 = this.bomb.explosion7();
            this.explosion8 = this.bomb.explosion8();
            this.explosion9 = this.bomb.explosion9();
        }

        if(this.bomb.y === 50 && this.bomb.x === 50) {
            this.explosion1 = this.bomb.explosion1();
            this.explosion4 = this.bomb.explosion4();
            this.explosion5 = this.bomb.explosion5();
            this.explosion8 = this.bomb.explosion8();
            this.explosion9 = this.bomb.explosion9();
        } else if(this.bomb.y === 50 && this.bomb.x === 100) {
            this.explosion1 = this.bomb.explosion1();
            this.explosion2 = this.bomb.explosion2();
            this.explosion4 = this.bomb.explosion4();
            this.explosion5 = this.bomb.explosion5();
        } else if(this.bomb.y === 50 && this.bomb.x === 400) {
            this.explosion1 = this.bomb.explosion1();
            this.explosion2 = this.bomb.explosion2();
            this.explosion3 = this.bomb.explosion3();
            this.explosion4 = this.bomb.explosion4();
        } else if (this.bomb.y === 50 && (this.bomb.x === 200 || this.bomb.x === 300)) {
            this.explosion1 = this.bomb.explosion1();
            this.explosion2 = this.bomb.explosion2();
            this.explosion3 = this.bomb.explosion3();
            this.explosion4 = this.bomb.explosion4();
            this.explosion5 = this.bomb.explosion5();
        } else if(this.bomb.y === 50 && (this.bomb.x === 150 || this.bomb.x === 250 || this.bomb.x === 350)) {
            this.explosion1 = this.bomb.explosion1();
            this.explosion2 = this.bomb.explosion2();
            this.explosion3 = this.bomb.explosion3();
            this.explosion4 = this.bomb.explosion4();
            this.explosion5 = this.bomb.explosion5();
            this.explosion8 = this.bomb.explosion8();
            this.explosion9 = this.bomb.explosion9();
        }

        if(this.bomb.y === 450 && this.bomb.x === 50) {
            this.explosion1 = this.bomb.explosion1();
            this.explosion4 = this.bomb.explosion4();
            this.explosion5 = this.bomb.explosion5();
            this.explosion6 = this.bomb.explosion6();
            this.explosion7 = this.bomb.explosion7();
        } else if(this.bomb.y === 450 && this.bomb.x === 100) {
            this.explosion1 = this.bomb.explosion1();
            this.explosion2 = this.bomb.explosion2();
            this.explosion4 = this.bomb.explosion4();
            this.explosion5 = this.bomb.explosion5();
        } else if(this.bomb.y === 450 && this.bomb.x === 400) {
            this.explosion1 = this.bomb.explosion1();
            this.explosion2 = this.bomb.explosion2();
            this.explosion3 = this.bomb.explosion3();
            this.explosion4 = this.bomb.explosion4();
        } else if (this.bomb.y === 450 && (this.bomb.x === 200 || this.bomb.x === 300)) {
            this.explosion1 = this.bomb.explosion1();
            this.explosion2 = this.bomb.explosion2();
            this.explosion3 = this.bomb.explosion3();
            this.explosion4 = this.bomb.explosion4();
            this.explosion5 = this.bomb.explosion5();
        } else if(this.bomb.y === 450 && (this.bomb.x === 150 || this.bomb.x === 250 || this.bomb.x === 350)) {
            this.explosion1 = this.bomb.explosion1();
            this.explosion2 = this.bomb.explosion2();
            this.explosion3 = this.bomb.explosion3();
            this.explosion4 = this.bomb.explosion4();
            this.explosion5 = this.bomb.explosion5();
            this.explosion6 = this.bomb.explosion6();
            this.explosion7 = this.bomb.explosion7();
        }

        if(this.bomb.y === 100 && (this.bomb.x === 150 || this.bomb.x === 250 || this.bomb.x === 350)) {
            this.explosion1 = this.bomb.explosion1();
            this.explosion6 = this.bomb.explosion6();
            this.explosion8 = this.bomb.explosion8();
            this.explosion9 = this.bomb.explosion9();
        } else if (this.bomb.y === 400 && (this.bomb.x === 150 || this.bomb.x === 250 || this.bomb.x === 350)) {
            this.explosion1 = this.bomb.explosion1();
            this.explosion6 = this.bomb.explosion6();
            this.explosion7 = this.bomb.explosion7();
            this.explosion8 = this.bomb.explosion8();
        }

        if(this.bomb.x === 100 && (this.bomb.y === 150 || this.bomb.y === 250 || this.bomb.y === 350)) {
            this.explosion1 = this.bomb.explosion1();
            this.explosion2 = this.bomb.explosion2();
            this.explosion4 = this.bomb.explosion4();
            this.explosion5 = this.bomb.explosion5();
        } else if (this.bomb.x === 400 && (this.bomb.y === 150 || this.bomb.y === 250 || this.bomb.y === 350)) {
            this.explosion1 = this.bomb.explosion1();
            this.explosion2 = this.bomb.explosion2();
            this.explosion3 = this.bomb.explosion3();
            this.explosion4 = this.bomb.explosion4();
        }

        if((this.bomb.y === 200 || this.bomb.y === 300) && (this.bomb.x === 150 || this.bomb.x === 250 || this.bomb.x === 350)) {
            this.explosion1 = this.bomb.explosion1();
            this.explosion6 = this.bomb.explosion6();
            this.explosion7 = this.bomb.explosion7();
            this.explosion8 = this.bomb.explosion8();
            this.explosion9 = this.bomb.explosion9();
        }

        if((this.bomb.x === 200 || this.bomb.x === 300) && (this.bomb.y === 150 || this.bomb.y === 250 || this.bomb.y === 350)) {
            this.explosion1 = this.bomb.explosion1();
            this.explosion2 = this.bomb.explosion2();
            this.explosion3 = this.bomb.explosion3();
            this.explosion4 = this.bomb.explosion4();
            this.explosion5 = this.bomb.explosion5();
        }

        if((this.bomb.x === 150 || this.bomb.x === 250 || this.bomb.x === 350) && (this.bomb.y === 150 || this.bomb.y === 250 || this.bomb.y === 350)) {
            this.explosion1 = this.bomb.explosion1();
            this.explosion2 = this.bomb.explosion2();
            this.explosion3 = this.bomb.explosion3();
            this.explosion4 = this.bomb.explosion4();
            this.explosion5 = this.bomb.explosion5();
            this.explosion6 = this.bomb.explosion6();
            this.explosion7 = this.bomb.explosion7();
            this.explosion8 = this.bomb.explosion8();
            this.explosion9 = this.bomb.explosion9();
        }            
 
    }

    deleteExplosions() {
        delete this.explosion1;
        delete this.explosion2;
        delete this.explosion3;
        delete this.explosion4;
        delete this.explosion5;
        delete this.explosion6;
        delete this.explosion7;
        delete this.explosion8;
        delete this.explosion9;
    }
} 
