'use strict'

const main = () => {


    const buildDom = (html) => {
        const main = document.querySelector('main');
        main.innerHTML = html;
        return main;
    }


    const buildSplashScreen = () => {
        const splashScreen = buildDom(`
            <section class="splash-screen">
                <h1>Bomberman</h1>
                <button>Start</button>
            </section>
        `);
        const startButton = document.querySelector('button');
        startButton.addEventListener('click', buildGameScreen);
    };

    const buildGameScreen = () => {
        const gameScreen = buildDom(`
            <section class="game-screen">
                <canvas></canvas>
            </section>
        `);

        const width = document.querySelector('.game-screen').offsetWidth;
        const height = document.querySelector('.game-screen').offsetHeight;

        const canvasElement = document.querySelector('canvas');

        canvasElement.setAttribute('width', width);
        canvasElement.setAttribute('height', height);

        //setTimeout(buildGameOver, 3000); //condicion de derrota o victoria

        const game = new Game(canvasElement);
        game.startLoop();


        // if ((game.player.y - game.player.size/2 >= 0) || (game.player.y + game.player.size/2 <= game.player.canvas.height)){

        // }

        // if ((game.player.y - 1 < 0) || (game.player.y + 1 > game.player.canvas.height) || (game.player.x - 1 < 0) || (game.player.x + 1 > game.player.canvas.width)){
                
        // }

        const playerActions = (event) => {
            let tecla = 0;
            game.player.speed = 25;
            let collision = false;

                if(event.code === 'KeyS') {
                    tecla = 1;

                    game.wall.forEach(l => {
                        l.forEach(e => {
                            collision = game.player.checkCollisions(tecla, e);
                            if(collision) {
                                game.player.speed = 0;
                            }
                        })
                    });
                    if(!collision) {
                        game.player.changeDirection(tecla, game.player.speed);
                    }
                }


                if(event.code === 'KeyW') {
                    tecla = 2;
                    game.wall.forEach(l => {
                        l.forEach(e => {
                            collision = game.player.checkCollisions(tecla, e);
                            if(collision) {
                                game.player.speed = 0;
                            }
                        })
                    });
                    if(!collision) {
                        game.player.changeDirection(tecla, game.player.speed);
                    }
                }
                if(event.code === 'KeyD') {
                    tecla = 3;
                    game.wall.forEach(l => {
                        l.forEach(e => {
                            collision = game.player.checkCollisions(tecla, e);
                            if(collision) {
                                game.player.speed = 0;
                            }
                        })
                    });
                    if(!collision) {
                        game.player.changeDirection(tecla, game.player.speed);
                    }
                }
                if(event.code === 'KeyA') {
                    tecla = 4;
                    game.wall.forEach(l => {
                        l.forEach(e => {
                            collision = game.player.checkCollisions(tecla, e);
                            if(collision) {
                                game.player.speed = 0;
                            }
                        })
                    });
                    if(!collision) {
                        game.player.changeDirection(tecla, game.player.speed);
                    }
                }

            if (event.code === 'Space') {
                game.buildBomb();

                console.log('bomba');
            }
            
        } 

        document.addEventListener('keyup', playerActions);

        const player2Actions = (event) => {
            console.log(event.code);
            let tecla = 0;
            game.player2.speed = 25;
            let collision = false;
    
                if(event.code === 'ArrowDown') {
                    tecla = 1;
                    console.log('funciona');
                    game.wall.forEach(l => {
                        l.forEach(e => {
                            collision = game.player2.checkCollisions(tecla, e);
                            if(collision) {
                                game.player2.speed = 0;
                            }
                        })
                    });
                    if(!collision) {
                        game.player2.changeDirection(tecla, game.player2.speed);
                    }
                }
    
    
                if(event.code === 'ArrowUp') {
                    tecla = 2;
                    game.wall.forEach(l => {
                        l.forEach(e => {
                            collision = game.player2.checkCollisions(tecla, e);
                            if(collision) {
                                game.player2.speed = 0;
                            }
                        })
                    });
                    if(!collision) {
                        game.player2.changeDirection(tecla, game.player2.speed);
                    }
                }
                if(event.code === 'ArrowRight') {
                    tecla = 3;
                    game.wall.forEach(l => {
                        l.forEach(e => {
                            collision = game.player2.checkCollisions(tecla, e);
                            if(collision) {
                                game.player2.speed = 0;
                            }
                        })
                    });
                    if(!collision) {
                        game.player2.changeDirection(tecla, game.player2.speed);
                    }
                }
                if(event.code === 'ArrowLeft') {
                    tecla = 4;
                    game.wall.forEach(l => {
                        l.forEach(e => {
                            collision = game.player2.checkCollisions(tecla, e);
                            if(collision) {
                                game.player2.speed = 0;
                            }
                        })
                    });
                    if(!collision) {
                        game.player2.changeDirection(tecla, game.player2.speed);
                    }
                }
    
            if (event.code === 'Period') {
                game.buildBomb2();
    
                console.log('bomba2');
            }
            
        } 
    
        document.addEventListener('keyup', player2Actions);

    }

    

    const buildGameOver = () => {
        const gameOverScreen = buildDom(`
            <section class="game-over">
                <h1>Game Over Screen</h1>
                <button>Restart</button>
            </section>
        `);


        const restartButton = document.querySelector('button');
        restartButton.addEventListener('click', buildGameScreen);


    }

    buildSplashScreen();
};


window.addEventListener('load', main);